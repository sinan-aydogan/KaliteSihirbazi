<script setup>
/* Funtions */
import { onMounted, onUnmounted, ref } from "vue";

/* Components */
import DropdownLink from "@/Components/Account/DropdownLink.vue";
import {router, usePage} from "@inertiajs/vue3";

defineProps({
  contentClasses: {
    type: Array,
    default: () => ["bg-white", "dark:bg-slate-800"],
  },
})

const open = ref(false);
const closeOnEscape = (e) => {
  if (open.value && e.key === "Escape") {
    open.value = false;
  }
};

onMounted(() => document.addEventListener("keydown", closeOnEscape));
onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));

/*Logout*/
const logout = () => {
  router.post(route("logout"));
};
</script>

<template>
  <div class="relative">
    <!-- User Menu -->
    <div @click="open = !open">
      <button
        v-if="usePage().props.features.managesProfilePhotos"
        class="
          flex
          text-sm
          border-2 border-transparent
          rounded-full
          focus:outline-none focus:border-gray-300
          transition
        "
      >
        <img
          class="h-12 w-12 rounded-full object-cover"
          :src="usePage().props.auth.user.profile_photo_url"
          :alt="usePage().props.auth.user.name"
        />
      </button>

      <span v-else class="inline-flex rounded-md">
        <button
          type="button"
          class="
            inline-flex
            items-center
            px-3
            py-2
            border border-transparent
            text-sm
            leading-4
            font-medium
            rounded-md
            text-gray-500
            bg-white
            hover:text-gray-700
            focus:outline-none
            transition
          "
        >
          {{ usePage().props.auth.user.name }}

          <svg
            class="ml-2 -mr-0.5 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </span>
    </div>

    <!-- Full Screen Dropdown Overlay -->
    <div v-show="open" class="fixed inset-0 z-40" @click="open = false"></div>

    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-show="open"
        class="absolute bottom-0 left-full z-50 ml-3 w-48 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl dark:border-slate-600 dark:bg-slate-800"
        style="display: none"
        @click="open = false"
      >
        <div
          class="divide-y divide-slate-100 dark:divide-slate-700"
          :class="contentClasses"
        >
          <!-- Account Management -->
          <div class="px-3 py-2.5 text-xs font-medium text-slate-500 dark:text-slate-400">
            {{ $t("account.manageAccount") }}
          </div>

          <DropdownLink :href="route('profile.show')">
            <font-awesome-icon icon="user-circle" class="mr-1" />

            {{ $t("account.account") }}
          </DropdownLink>

          <DropdownLink
            :href="route('api-tokens.index')"
            v-if="usePage().props.features.hasApiFeatures"
          >
            API Tokens
          </DropdownLink>

          <!-- Authentication -->
          <form @submit.prevent="logout">
            <DropdownLink as="button">
              <span class="text-rose-700 dark:text-rose-400">
                <font-awesome-icon
                  icon="arrow-right-from-bracket"
                  class="mr-1"
                />
                {{ $t("auth.logOut") }}
              </span>
            </DropdownLink>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>
