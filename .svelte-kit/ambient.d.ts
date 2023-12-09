
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const SHELL: string;
	export const npm_command: string;
	export const SESSION_MANAGER: string;
	export const npm_package_scripts_generate_types: string;
	export const FUNCNEST: string;
	export const npm_package_devDependencies__types_node: string;
	export const XDG_SESSION_PATH: string;
	export const NVM_INC: string;
	export const npm_package_repository_url: string;
	export const GNOME_DESKTOP_SESSION_ID: string;
	export const TERMINAL_EMULATOR: string;
	export const npm_package_exports___hooks_import: string;
	export const NODE: string;
	export const npm_package_scripts_test_cross_platform_build: string;
	export const LC_ADDRESS: string;
	export const LC_NAME: string;
	export const npm_package_exports___node_polyfills_types: string;
	export const npm_package_devDependencies_dts_buddy: string;
	export const CINNAMON_VERSION: string;
	export const TERM_SESSION_ID: string;
	export const npm_package_peerDependencies_svelte: string;
	export const DESKTOP_SESSION: string;
	export const LC_MONETARY: string;
	export const npm_package_exports___import: string;
	export const EDITOR: string;
	export const npm_package_scripts_test_unit: string;
	export const GTK_MODULES: string;
	export const XDG_SEAT: string;
	export const npm_package_dependencies_sade: string;
	export const PWD: string;
	export const npm_package_devDependencies_vite: string;
	export const LOGNAME: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XDG_SESSION_TYPE: string;
	export const _: string;
	export const XAUTHORITY: string;
	export const DESKTOP_STARTUP_ID: string;
	export const npm_package_exports___node_import: string;
	export const npm_package_dependencies_cookie: string;
	export const npm_package_dependencies_sirv: string;
	export const npm_package_dependencies_tiny_glob: string;
	export const XDG_GREETER_DATA_DIR: string;
	export const npm_package_bugs_url: string;
	export const npm_package_exports___node_types: string;
	export const GJS_DEBUG_TOPICS: string;
	export const npm_package_exports___vite_types: string;
	export const MOTD_SHOWN: string;
	export const HOME: string;
	export const LC_PAPER: string;
	export const LANG: string;
	export const npm_package_devDependencies_typescript: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const npm_package_version: string;
	export const npm_package_files_0: string;
	export const npm_package_scripts_check_all: string;
	export const npm_package_files_1: string;
	export const npm_package_files_2: string;
	export const npm_package_files_3: string;
	export const npm_package_repository_type: string;
	export const npm_package_files_4: string;
	export const npm_package_files_5: string;
	export const npm_package_files_6: string;
	export const npm_package_scripts_test_integration: string;
	export const npm_package_exports___vite_import: string;
	export const XDG_SEAT_PATH: string;
	export const npm_package_devDependencies__types_set_cookie_parser: string;
	export const npm_package_dependencies_kleur: string;
	export const npm_package_devDependencies_rollup: string;
	export const INIT_CWD: string;
	export const npm_package_scripts_test_cross_platform_dev: string;
	export const npm_package_scripts_format: string;
	export const npm_lifecycle_script: string;
	export const npm_package_description: string;
	export const GJS_DEBUG_OUTPUT: string;
	export const NVM_DIR: string;
	export const XDG_ACTIVATION_TOKEN: string;
	export const XDG_SESSION_CLASS: string;
	export const npm_package_peerDependencies_vite: string;
	export const LC_IDENTIFICATION: string;
	export const TERM: string;
	export const npm_package_name: string;
	export const npm_package_type: string;
	export const USER: string;
	export const npm_config_frozen_lockfile: string;
	export const npm_package_devDependencies_vitest: string;
	export const npm_package_exports___types: string;
	export const npm_package_dependencies_undici: string;
	export const npm_package_exports___package_json: string;
	export const npm_package_homepage: string;
	export const npm_package_dependencies_set_cookie_parser: string;
	export const npm_package_dependencies__types_cookie: string;
	export const npm_package_exports___node_polyfills_import: string;
	export const DISPLAY: string;
	export const npm_lifecycle_event: string;
	export const SHLVL: string;
	export const NVM_CD_FLAGS: string;
	export const npm_package_dependencies_magic_string: string;
	export const LC_TELEPHONE: string;
	export const LC_MEASUREMENT: string;
	export const XDG_VTNR: string;
	export const npm_package_devDependencies__types_connect: string;
	export const npm_package_devDependencies__types_sade: string;
	export const XDG_SESSION_ID: string;
	export const npm_config_user_agent: string;
	export const npm_package_dependencies_mrmime: string;
	export const npm_package_scripts_lint: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_scripts_test: string;
	export const npm_package_devDependencies_svelte_preprocess: string;
	export const XDG_RUNTIME_DIR: string;
	export const npm_package_scripts_generate_version: string;
	export const DEBUGINFOD_URLS: string;
	export const LC_TIME: string;
	export const npm_package_dependencies_esm_env: string;
	export const npm_package_dependencies__sveltejs_vite_plugin_svelte: string;
	export const FIG_JETBRAINS_SHELL_INTEGRATION: string;
	export const npm_package_bin_svelte_kit: string;
	export const GTK3_MODULES: string;
	export const npm_package_scripts_check: string;
	export const BROWSER: string;
	export const PATH: string;
	export const npm_package_dependencies_devalue: string;
	export const npm_config_node_gyp: string;
	export const GDMSESSION: string;
	export const npm_package_exports___hooks_types: string;
	export const npm_package_devDependencies__playwright_test: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const npm_package_license: string;
	export const npm_package_scripts_postinstall: string;
	export const MAIL: string;
	export const NVM_BIN: string;
	export const npm_config_registry: string;
	export const npm_package_repository_directory: string;
	export const GIO_LAUNCHED_DESKTOP_FILE_PID: string;
	export const npm_node_execpath: string;
	export const GIO_LAUNCHED_DESKTOP_FILE: string;
	export const LC_NUMERIC: string;
	export const npm_package_types: string;
	export const npm_package_engines_node: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		SHELL: string;
		npm_command: string;
		SESSION_MANAGER: string;
		npm_package_scripts_generate_types: string;
		FUNCNEST: string;
		npm_package_devDependencies__types_node: string;
		XDG_SESSION_PATH: string;
		NVM_INC: string;
		npm_package_repository_url: string;
		GNOME_DESKTOP_SESSION_ID: string;
		TERMINAL_EMULATOR: string;
		npm_package_exports___hooks_import: string;
		NODE: string;
		npm_package_scripts_test_cross_platform_build: string;
		LC_ADDRESS: string;
		LC_NAME: string;
		npm_package_exports___node_polyfills_types: string;
		npm_package_devDependencies_dts_buddy: string;
		CINNAMON_VERSION: string;
		TERM_SESSION_ID: string;
		npm_package_peerDependencies_svelte: string;
		DESKTOP_SESSION: string;
		LC_MONETARY: string;
		npm_package_exports___import: string;
		EDITOR: string;
		npm_package_scripts_test_unit: string;
		GTK_MODULES: string;
		XDG_SEAT: string;
		npm_package_dependencies_sade: string;
		PWD: string;
		npm_package_devDependencies_vite: string;
		LOGNAME: string;
		XDG_SESSION_DESKTOP: string;
		XDG_SESSION_TYPE: string;
		_: string;
		XAUTHORITY: string;
		DESKTOP_STARTUP_ID: string;
		npm_package_exports___node_import: string;
		npm_package_dependencies_cookie: string;
		npm_package_dependencies_sirv: string;
		npm_package_dependencies_tiny_glob: string;
		XDG_GREETER_DATA_DIR: string;
		npm_package_bugs_url: string;
		npm_package_exports___node_types: string;
		GJS_DEBUG_TOPICS: string;
		npm_package_exports___vite_types: string;
		MOTD_SHOWN: string;
		HOME: string;
		LC_PAPER: string;
		LANG: string;
		npm_package_devDependencies_typescript: string;
		XDG_CURRENT_DESKTOP: string;
		npm_package_version: string;
		npm_package_files_0: string;
		npm_package_scripts_check_all: string;
		npm_package_files_1: string;
		npm_package_files_2: string;
		npm_package_files_3: string;
		npm_package_repository_type: string;
		npm_package_files_4: string;
		npm_package_files_5: string;
		npm_package_files_6: string;
		npm_package_scripts_test_integration: string;
		npm_package_exports___vite_import: string;
		XDG_SEAT_PATH: string;
		npm_package_devDependencies__types_set_cookie_parser: string;
		npm_package_dependencies_kleur: string;
		npm_package_devDependencies_rollup: string;
		INIT_CWD: string;
		npm_package_scripts_test_cross_platform_dev: string;
		npm_package_scripts_format: string;
		npm_lifecycle_script: string;
		npm_package_description: string;
		GJS_DEBUG_OUTPUT: string;
		NVM_DIR: string;
		XDG_ACTIVATION_TOKEN: string;
		XDG_SESSION_CLASS: string;
		npm_package_peerDependencies_vite: string;
		LC_IDENTIFICATION: string;
		TERM: string;
		npm_package_name: string;
		npm_package_type: string;
		USER: string;
		npm_config_frozen_lockfile: string;
		npm_package_devDependencies_vitest: string;
		npm_package_exports___types: string;
		npm_package_dependencies_undici: string;
		npm_package_exports___package_json: string;
		npm_package_homepage: string;
		npm_package_dependencies_set_cookie_parser: string;
		npm_package_dependencies__types_cookie: string;
		npm_package_exports___node_polyfills_import: string;
		DISPLAY: string;
		npm_lifecycle_event: string;
		SHLVL: string;
		NVM_CD_FLAGS: string;
		npm_package_dependencies_magic_string: string;
		LC_TELEPHONE: string;
		LC_MEASUREMENT: string;
		XDG_VTNR: string;
		npm_package_devDependencies__types_connect: string;
		npm_package_devDependencies__types_sade: string;
		XDG_SESSION_ID: string;
		npm_config_user_agent: string;
		npm_package_dependencies_mrmime: string;
		npm_package_scripts_lint: string;
		PNPM_SCRIPT_SRC_DIR: string;
		npm_execpath: string;
		npm_package_devDependencies_svelte: string;
		npm_package_scripts_test: string;
		npm_package_devDependencies_svelte_preprocess: string;
		XDG_RUNTIME_DIR: string;
		npm_package_scripts_generate_version: string;
		DEBUGINFOD_URLS: string;
		LC_TIME: string;
		npm_package_dependencies_esm_env: string;
		npm_package_dependencies__sveltejs_vite_plugin_svelte: string;
		FIG_JETBRAINS_SHELL_INTEGRATION: string;
		npm_package_bin_svelte_kit: string;
		GTK3_MODULES: string;
		npm_package_scripts_check: string;
		BROWSER: string;
		PATH: string;
		npm_package_dependencies_devalue: string;
		npm_config_node_gyp: string;
		GDMSESSION: string;
		npm_package_exports___hooks_types: string;
		npm_package_devDependencies__playwright_test: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		npm_package_license: string;
		npm_package_scripts_postinstall: string;
		MAIL: string;
		NVM_BIN: string;
		npm_config_registry: string;
		npm_package_repository_directory: string;
		GIO_LAUNCHED_DESKTOP_FILE_PID: string;
		npm_node_execpath: string;
		GIO_LAUNCHED_DESKTOP_FILE: string;
		LC_NUMERIC: string;
		npm_package_types: string;
		npm_package_engines_node: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
