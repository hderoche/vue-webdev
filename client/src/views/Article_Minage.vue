<template>
    <div class="flex flex-wrap md items-center h-screen">
      <div class="bg-white w-full md:w-1/2 h-screen">
        <div class="mx-32">
          <h1 class="text-6xl font-bold mt-16">Le minage</h1>

          <!-- country region island -->
          <div class="flex mt-16 font-light text-gray-500">
            <div class="pr-4">
              <span class="uppercase">Cryptomonnaies</span>
              <p class="text-2xl text-gray-900 font-semibold pt-2">Bitcoin</p>
            </div>
            <div class="pr-4">
              <span class="uppercase">Minage</span>
              <p class="text-2xl text-gray-900 font-semibold pt-2">Proof of work</p>
            </div>
            <div class="pr-4">
              <span class="uppercase">Pools</span>
              <p class="text-2xl text-gray-900 font-semibold pt-2">Pools de minage</p>
            </div>
          </div>

          <!-- description -->
          <div
            class="description w-full sm: md:w-2/3 mt-16 text-gray-500 text-sm"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus fuga quas unde quis non id repellat sed, minima aut repellendus dolorem, rerum quae autem. Debitis maiores quisquam assumenda aliquid fugiat?
          </div>
            <br>
          <button class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
            <router-link to="/infos">Retour</router-link>
          </button>
        </div>
      </div>
      <div class="bg-red-600 w-full md:w-1/2 h-screen">
        <img
          src="https://source.unsplash.com/7H77FWkK_x4/1600x900"
          class="h-screen w-full"
          alt=""
        />
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
