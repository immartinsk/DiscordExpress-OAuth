/* eslint-disable */
<template>
  <div>
    <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
      <div class="flex-1 flex flex-col min-h-0 bg-gray-800">
        <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <nav class="mt-5 flex-1 px-2 space-y-1">
            <a
              href="#"
              class="bg-gray-900 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
            >
              <svg
                class="text-gray-300 mr-3 flex-shrink-0 h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Dashboard
            </a>

            <a
              href="#"
              class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md"
            >
              <!-- Heroicon name: outline/inbox -->
              <svg
                class="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
              Tools
            </a>
          </nav>
        </div>
        <div class="flex-shrink-0 flex bg-gray-700 p-4">
          <div class="flex-shrink-0 w-full group block">
            <div class="flex items-center">
              <div>
                <img
                  class="inline-block h-9 w-9 rounded-full"
                  :src="userData.profile.photos[0].value"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <p class="text-sm font-medium text-white">
                  {{ userData.profile.displayName }}
                </p>
                <a
                  href="http://localhost:3001/auth/logout"
                  class="text-xs font-medium text-gray-300 group-hover:text-gray-200"
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="md:pl-64 flex flex-col flex-1">
      <div
        class="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100"
      >
        <button
          type="button"
          class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <span class="sr-only">Open sidebar</span>
          <!-- Heroicon name: outline/menu -->
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <main class="flex-1">
        <div class="py-6">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div class="py-4">
              <div id="account_stats">
                <dl
                  class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                >
                  <div
                    class="relative bg-white pt-5 px-4 pb-4 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
                  >
                    <dt>
                      <div class="absolute bg-indigo-500 rounded-md p-3">
                        <!-- Heroicon name: outline/users -->
                        <svg
                          class="h-8 w-8 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                          />
                        </svg>
                      </div>
                      <p
                        class="ml-16 text-sm font-medium text-gray-500 truncate"
                      >
                        Email
                      </p>
                    </dt>
                    <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
                      <p class="text-l font-semibold text-gray-900">
                        {{ userData.profile._json.email }}
                      </p>
                    </dd>
                  </div>

                  <div
                    class="relative bg-white pt-5 px-4 pb-6 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
                  >
                    <dt>
                      <div class="absolute bg-indigo-500 rounded-md p-3">
                        <!-- Heroicon name: outline/users -->
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-8 h-8 text-white"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                          />
                        </svg>
                      </div>
                      <p
                        class="ml-16 text-sm font-medium text-gray-500 truncate"
                      >
                        Account Created
                      </p>
                    </dt>
                    <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
                      <p class="text-l font-semibold text-gray-900">
                        {{ userData.profile.created }}
                      </p>
                    </dd>
                  </div>

                  <div
                    class="relative bg-white pt-5 px-4 pb-6 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
                  >
                    <dt>
                      <div class="absolute bg-indigo-500 rounded-md p-3">
                        <!-- Heroicon name: outline/users -->
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-8 h-8 text-white"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                          />
                        </svg>
                      </div>
                      <p
                        class="ml-16 text-sm font-medium text-gray-500 truncate"
                      >
                        Account ID
                      </p>
                    </dt>
                    <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
                      <p class="text-l font-semibold text-gray-900">
                        {{ userData.profile.id }}
                      </p>
                    </dd>
                  </div>

                  <div
                    class="relative bg-white pt-5 px-4 pb-6 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
                  >
                    <dt>
                      <div class="absolute bg-indigo-500 rounded-md p-3">
                        <!-- Heroicon name: outline/users -->
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-8 h-8 text-white"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                          />
                        </svg>
                      </div>
                      <p
                        class="ml-16 text-sm font-medium text-gray-500 truncate"
                      >
                        Discord Nitro
                      </p>
                    </dt>
                    <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
                      <p class="text-l font-semibold text-gray-900">
                        {{
                          userData.profile._json.premium_type === Number(2)
                            ? "Nitro"
                            : "Nitro Classic"
                        }}
                      </p>
                    </dd>
                  </div>

                  <div
                    class="relative bg-white pt-5 px-4 pb-6 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
                  >
                    <dt>
                      <div class="absolute bg-indigo-500 rounded-md p-3">
                        <!-- Heroicon name: outline/users -->
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-8 h-8 text-white"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                          />
                        </svg>
                      </div>
                      <p
                        class="ml-16 text-sm font-medium text-gray-500 truncate"
                      >
                        Multi-Factor Authentication
                      </p>
                    </dt>
                    <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
                      <p class="text-l font-semibold text-gray-900">
                        {{
                          userData.profile._json.mfa_enabled === true
                            ? "Enabled"
                            : "Disabled"
                        }}
                      </p>
                    </dd>
                  </div>

                  <div
                    class="relative bg-white pt-5 px-4 pb-6 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
                  >
                    <dt>
                      <div class="absolute bg-indigo-500 rounded-md p-3">
                        <!-- Heroicon name: outline/users -->
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-8 h-8 text-white"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                          />
                        </svg>
                      </div>
                      <p
                        class="ml-16 text-sm font-medium text-gray-500 truncate"
                      >
                        Tokens
                      </p>
                    </dt>
                    <dd
                      class="ml-16 pb-6 flex items-baseline justify-evenly sm:pb-7"
                    >
                      <p
                        class="text-l font-semibold text-gray-900 flex flex-col"
                      >
                        Access Token
                        <button
                          class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 justify-center"
                          @click="copyToClipboard(userData.aToken)"
                        >
                          Copy Token
                        </button>
                      </p>
                      <p
                        class="text-l font-semibold text-gray-900 flex flex-col"
                      >
                        Refresh Token
                        <button
                          class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 justify-center"
                          @click="copyToClipboard(userData.rToken)"
                        >
                          Copy Token
                        </button>
                      </p>
                    </dd>
                  </div>
                </dl>
              </div>
              <div id="guild_grid">
                <ul
                  role="server_guild"
                  class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                  <li
                    class="col-span-1 flex shadow-sm rounded-md"
                    v-for="guild in userGuilds"
                    :key="guild.id"
                  >
                    <div
                      class="flex-shrink-0 flex items-center justify-center bg-white w-16 border-t border-r border-l border-b border-gray-200 text-white text-sm font-medium rounded-l-md"
                    >
                      <div class="rounded-full">
                        <img
                          v-if="guild.icon !== null"
                          :src="`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.webp?size=96`"
                          :alt="`${guild.name}'s guild icon'`"
                          class="rounded-full w-12 h-12"
                        />
                        <img
                          v-else
                          src="@/static/default-avatars/discord-avatar-1.png"
                          :alt="`${guild.name}'s guild icon'`"
                          class="rounded-full w-12 h-12"
                        />
                      </div>
                    </div>
                    <div
                      class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate"
                    >
                      <div class="flex-1 px-4 py-2 text-sm truncate">
                        <a
                          href="#"
                          class="text-gray-900 font-medium hover:text-gray-600"
                          >{{ guild.name }}</a
                        >
                        <p class="text-gray-500">{{ guild.id }}</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
// const api = "https://discord.com/api/v9";
import axios from "axios";
export default {
  data() {
    return {
      userData: null,
      userGuilds: null,
      filledServerAvatar: null,
    };
  },

  async mounted() {
    try {
      const getUser = await axios.get("http://localhost:3001/auth", {
        withCredentials: true,
      });

      this.userData = getUser.data;
    } catch (error) {
      console.log(error);
    }

    this.getGuilds(this.userData.aToken);

    this.fetchAvatar();
  },

  methods: {
    async getGuilds(token) {
      await fetch("https://discord.com/api/users/@me/guilds", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
        .then((guilds) => guilds.json())
        .then((data) => {
          this.userGuilds = data;
        });
    },

    fetchAvatar() {
      let avatarList = [
        "@/static/default-avatars/discord-avatar-1.png",
        "@/static/default-avatars/discord-avatar-2.png",
        "@/static/default-avatars/discord-avatar-3.png",
        "@/static/default-avatars/discord-avatar-4.png",
        "@/static/default-avatars/discord-avatar-5.png",
        "@/static/default-avatars/discord-avatar-6.png",
        "@/static/default-avatars/discord-avatar-7.png",
        "@/static/default-avatars/discord-avatar-8.png",
        "@/static/default-avatars/discord-avatar-9.png",
        "@/static/default-avatars/discord-avatar-10.png",
        "@/static/default-avatars/discord-avatar-11.png",
        "@/static/default-avatars/discord-avatar-12.png",
        "@/static/default-avatars/discord-avatar-13.png",
        "@/static/default-avatars/discord-avatar-14.png",
        "@/static/default-avatars/discord-avatar-15.png",
      ];

      let randomAvatar = Math.floor(Math.random() * avatarList.length);

      this.filledServerAvatar = avatarList[randomAvatar];
    },

    copyToClipboard(token) {
      navigator.clipboard.writeText(token);
      this.$toast.success("Token copied to Clipboard");
    },
  },
};
</script>

