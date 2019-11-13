<template>
  <div>{{ error }}</div>
</template>

<script>
import { getTransaction, getBlock } from '../client';

export default {
  data() {
    return { error: {} };
  },
  created() {
    this.reload();
  },
  methods: {
    async reload() {
      const str = (this.$route.query.q || '').trim();
      if (!str) {
        return this.$router.replace({ name: 'home' });
      }

      if (/^0x[0-9a-f]{40}$/i.test(str)) {
        // address
        return this.$router.replace({
          name: 'account',
          params: { addr: str },
        });
      }
      if (/^0x[0-9-a-f]{64}$/i.test(str)) {
        // bytes32
        try {
          const [block, tx] = await Promise.all([
            getBlock(str),
            getTransaction(str),
          ]);

          if (block) {
            return this.$router.replace({
              name: 'block',
              params: { id: block.id },
            });
          }
          if (tx) {
            return this.$router.replace({ name: 'tx', params: { id: tx.id } });
          }
        } catch (err) {
          this.error = err;
        }
      } else if (/^[0-9]+$/.test(str)) {
        const num = parseInt(str, 10);
        if (num < 2 ** 32) {
          try {
            const block = await getBlock(num);
            if (block) {
              return this.$router.replace({
                name: 'block',
                params: { id: block.id },
              });
            }
          } catch (err) {
            this.error = err;
          }
        }
      }
      if (!this.error) {
        this.error = new Error(`No result for '${str}'`);
      }
      return null;
    },
  },
};
</script>
