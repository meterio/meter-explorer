<template>
  <div>{{error}}</div>
</template>

<script>
import { web3 } from "../client";

export default {
  data: function() {
    return { error: {} };
  },
  created() {
    this.reload();
  },
  methods: {
    reload: async function() {
      const str = (this.$route.query.q || "").trim();
      if (!str) {
        return this.$router.replace({ name: "home" });
      }

      if (/^0x[0-9a-f]{40}$/i.test(str)) {
        //address
        return this.$router.replace({
          name: "account",
          params: { addr: str }
        });
      } else if (/^0x[0-9-a-f]{64}$/i.test(str)) {
        //bytes32
        try {
          const [block, tx] = await Promise.all([
            web3.eth.getBlock(str),
            web3.eth.getTransaction(str)
          ]);

          if (block) {
            return this.$router.replace({
              name: "block",
              params: { id: block.id }
            });
          }
          if (tx) {
            return this.$router.replace({ name: "tx", params: { id: tx.id } });
          }
        } catch (err) {
          this.error = err;
        }
      } else if (/^[0-9]+$/.test(str)) {
        const num = parseInt(str);
        if (num < 2 ** 32) {
          try {
            const block = await web3.eth.getBlock(num);
            if (block) {
              return this.$router.replace({
                name: "block",
                params: { id: block.id }
              });
            }
          } catch (err) {
            this.error;
          }
        }
      }
      if (!this.error) {
        this.error = new Error(`No result for '${str}'`);
      }
    }
  }
};
</script>
