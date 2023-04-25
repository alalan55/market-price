<template>
    <div class="logo">
        <span>
            MP 
        </span>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import "@/assets/scss/main";

.logo{
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: $pink-1;

    span{
        font-weight: 800;
        color: white;
        font-size: 1.5rem;
    }
}

</style>