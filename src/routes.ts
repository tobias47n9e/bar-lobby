import index from '@/views/index.vue'
import intro from '@/views/intro.vue'
import login from '@/views/login.vue'
import preloader from '@/views/preloader.vue'
import development_index from '@/views/development/index.vue'
import home_index from '@/views/home/index.vue'
import learn_index from '@/views/learn/index.vue'
import library_index from '@/views/library/index.vue'
import multiplayer_index from '@/views/multiplayer/index.vue'
import profile_index from '@/views/profile/index.vue'
import singleplayer_index from '@/views/singleplayer/index.vue'
import store_index from '@/views/store/index.vue'
import debug_inputs from '@/views/debug/inputs.vue'
import debug_layout_test from '@/views/debug/layout-test.vue'
import debug_playground from '@/views/debug/playground.vue'
import development_game_dev from '@/views/development/game-dev.vue'
import development_lobby_dev from '@/views/development/lobby-dev.vue'
import development_map_dev from '@/views/development/map-dev.vue'
import development_server_dev from '@/views/development/server-dev.vue'
import development_website_dev from '@/views/development/website-dev.vue'
import home_changes from '@/views/home/changes.vue'
import home_donate from '@/views/home/donate.vue'
import home_home from '@/views/home/home.vue'
import home_news from '@/views/home/news.vue'
import learn_commands from '@/views/learn/commands.vue'
import learn_guides from '@/views/learn/guides.vue'
import learn_tutorials from '@/views/learn/tutorials.vue'
import library_maps from '@/views/library/maps.vue'
import library_replays from '@/views/library/replays.vue'
import library_units from '@/views/library/units.vue'
import multiplayer_battle from '@/views/multiplayer/battle.vue'
import multiplayer_casual from '@/views/multiplayer/casual.vue'
import multiplayer_custom from '@/views/multiplayer/custom.vue'
import multiplayer_ranked from '@/views/multiplayer/ranked.vue'
import multiplayer_tournaments from '@/views/multiplayer/tournaments.vue'
import profile_achievements from '@/views/profile/achievements.vue'
import profile_matches from '@/views/profile/matches.vue'
import profile_overview from '@/views/profile/overview.vue'
import profile_stats from '@/views/profile/stats.vue'
import singleplayer_campaign from '@/views/singleplayer/campaign.vue'
import singleplayer_custom from '@/views/singleplayer/custom.vue'
import singleplayer_scenarios from '@/views/singleplayer/scenarios.vue'
import singleplayer_tutorials from '@/views/singleplayer/tutorials.vue'
import store_store from '@/views/store/store.vue'

export default [
  {
    name: 'index',
    path: '/',
    component: index,
    redirect: '/preloader',
  },
  {
    name: 'intro',
    path: '/intro',
    component: intro,
  },
  {
    name: 'login',
    path: '/login',
    component: login,
  },
  {
    name: 'preloader',
    path: '/preloader',
    component: preloader,
  },
  {
    name: 'development',
    path: '/development',
    component: development_index,
    meta: {
      title: 'Development',
      transition: 'primary',
      order: 5,
    },
    redirect: '/development/game-dev',
  },
  {
    name: 'home',
    path: '/home',
    component: home_index,
    meta: {
      title: 'Home',
      order: 0,
      transition: 'primary',
    },
    redirect: '/home/home',
  },
  {
    name: 'learn',
    path: '/learn',
    component: learn_index,
    meta: {
      title: 'Learn',
      order: 4,
      transition: 'primary',
    },
    redirect: '/learn/guides',
  },
  {
    name: 'library',
    path: '/library',
    component: library_index,
    meta: {
      title: 'Library',
      order: 2,
      transition: 'primary',
    },
    redirect: '/library/replays',
  },
  {
    name: 'multiplayer',
    path: '/multiplayer',
    component: multiplayer_index,
    meta: {
      title: 'Multiplayer',
      order: 1,
      transition: 'primary',
    },
    redirect: '/multiplayer/ranked',
  },
  {
    name: 'profile',
    path: '/profile',
    component: profile_index,
    meta: {
      title: 'Profile',
      transition: 'primary',
    },
    redirect: '/profile/overview',
  },
  {
    name: 'singleplayer',
    path: '/singleplayer',
    component: singleplayer_index,
    meta: {
      title: 'Singleplayer',
      order: 0,
      offline: true,
      transition: 'primary',
    },
    redirect: '/singleplayer/campaign',
  },
  {
    name: 'store',
    path: '/store',
    component: store_index,
    meta: {
      title: 'Store',
      order: 4,
      transition: 'primary',
    },
    redirect: '/store/store',
  },
  {
    name: 'debug-inputs',
    path: '/debug/inputs',
    component: debug_inputs,
    meta: {
      title: 'Inputs',
      order: 0,
    },
  },
  {
    name: 'debug-layout-test',
    path: '/debug/layout-test',
    component: debug_layout_test,
    meta: {
      order: 2,
    },
  },
  {
    name: 'debug-playground',
    path: '/debug/playground',
    component: debug_playground,
    meta: {
      title: 'Playground',
      order: 1,
    },
  },
  {
    name: 'development-game-dev',
    path: '/development/game-dev',
    component: development_game_dev,
    meta: {
      title: 'Game',
      order: 0,
    },
  },
  {
    name: 'development-lobby-dev',
    path: '/development/lobby-dev',
    component: development_lobby_dev,
    meta: {
      title: 'Lobby',
      order: 2,
    },
  },
  {
    name: 'development-map-dev',
    path: '/development/map-dev',
    component: development_map_dev,
    meta: {
      title: 'Maps',
      order: 1,
    },
  },
  {
    name: 'development-server-dev',
    path: '/development/server-dev',
    component: development_server_dev,
    meta: {
      title: 'Server',
      order: 3,
    },
  },
  {
    name: 'development-website-dev',
    path: '/development/website-dev',
    component: development_website_dev,
    meta: {
      title: 'Website',
      order: 4,
    },
  },
  {
    name: 'home-changes',
    path: '/home/changes',
    component: home_changes,
    meta: {
      title: 'Changes',
      order: 2,
    },
  },
  {
    name: 'home-donate',
    path: '/home/donate',
    component: home_donate,
    meta: {
      title: 'Donate',
      order: 3,
    },
  },
  {
    name: 'home-home',
    path: '/home/home',
    component: home_home,
    meta: {
      title: 'Home',
      order: 0,
    },
  },
  {
    name: 'home-news',
    path: '/home/news',
    component: home_news,
    meta: {
      title: 'News',
      order: 1,
    },
  },
  {
    name: 'learn-commands',
    path: '/learn/commands',
    component: learn_commands,
    meta: {
      title: 'Commands',
      order: 1,
    },
  },
  {
    name: 'learn-guides',
    path: '/learn/guides',
    component: learn_guides,
    meta: {
      title: 'Guides',
      order: 0,
    },
  },
  {
    name: 'learn-tutorials',
    path: '/learn/tutorials',
    component: learn_tutorials,
    meta: {
      title: 'Tutorials',
      order: 2,
    },
    redirect: '/singleplayer/tutorials',
  },
  {
    name: 'library-maps',
    path: '/library/maps',
    component: library_maps,
    meta: {
      title: 'Maps',
      order: 1,
    },
  },
  {
    name: 'library-replays',
    path: '/library/replays',
    component: library_replays,
    meta: {
      title: 'Replays',
      order: 0,
    },
  },
  {
    name: 'library-units',
    path: '/library/units',
    component: library_units,
    meta: {
      title: 'Units',
      order: 1,
    },
  },
  {
    name: 'multiplayer-battle',
    path: '/multiplayer/battle',
    component: multiplayer_battle,
    meta: {
      title: 'Battle',
    },
  },
  {
    name: 'multiplayer-casual',
    path: '/multiplayer/casual',
    component: multiplayer_casual,
    meta: {
      title: 'Casual',
      order: 1,
    },
  },
  {
    name: 'multiplayer-custom',
    path: '/multiplayer/custom',
    component: multiplayer_custom,
    meta: {
      title: 'Custom',
      order: 2,
    },
  },
  {
    name: 'multiplayer-ranked',
    path: '/multiplayer/ranked',
    component: multiplayer_ranked,
    meta: {
      title: 'Ranked',
      order: 0,
    },
  },
  {
    name: 'multiplayer-tournaments',
    path: '/multiplayer/tournaments',
    component: multiplayer_tournaments,
    meta: {
      title: 'Tournaments',
      order: 3,
    },
  },
  {
    name: 'profile-achievements',
    path: '/profile/achievements',
    component: profile_achievements,
    meta: {
      title: 'Achievements',
      order: 1,
    },
  },
  {
    name: 'profile-matches',
    path: '/profile/matches',
    component: profile_matches,
    meta: {
      title: 'Matches',
      order: 3,
    },
  },
  {
    name: 'profile-overview',
    path: '/profile/overview',
    component: profile_overview,
    meta: {
      title: 'Overview',
      order: 0,
    },
  },
  {
    name: 'profile-stats',
    path: '/profile/stats',
    component: profile_stats,
    meta: {
      title: 'Stats',
      order: 2,
    },
  },
  {
    name: 'singleplayer-campaign',
    path: '/singleplayer/campaign',
    component: singleplayer_campaign,
    meta: {
      title: 'Campaign',
      order: 0,
      offline: true,
    },
  },
  {
    name: 'singleplayer-custom',
    path: '/singleplayer/custom',
    component: singleplayer_custom,
    meta: {
      title: 'Custom',
      order: 2,
      offline: true,
    },
  },
  {
    name: 'singleplayer-scenarios',
    path: '/singleplayer/scenarios',
    component: singleplayer_scenarios,
    meta: {
      title: 'Scenarios',
      order: 1,
      offline: true,
    },
  },
  {
    name: 'singleplayer-tutorials',
    path: '/singleplayer/tutorials',
    component: singleplayer_tutorials,
    meta: {
      title: 'Tutorials',
      order: 3,
      offline: true,
    },
  },
  {
    name: 'store-store',
    path: '/store/store',
    component: store_store,
    meta: {
      title: 'Store',
      order: 0,
    },
  },
]
