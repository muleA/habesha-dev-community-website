interface EnvConfig {
  port: number;
  apiUrl: string;
  appName: string;
  discord: {
    url: string;
  };
  github: {
    url: string;
  };
  features: {
    enableAnalytics: boolean;
    enableNotifications: boolean;
  };
  maps: {
    mapboxToken: string;
  };
}

export const env: EnvConfig = {
  port: Number(import.meta.env.VITE_PORT) || 3500,
  apiUrl: import.meta.env.VITE_API_URL || "http://localhost:8000",
  appName: import.meta.env.VITE_APP_NAME || "Ethiopian Developers Community",
  discord: {
    url: import.meta.env.VITE_DISCORD_URL || "",
  },
  github: {
    url: import.meta.env.VITE_GITHUB_URL || "",
  },
  features: {
    enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === "true",
    enableNotifications: import.meta.env.VITE_ENABLE_NOTIFICATIONS === "true",
  },
  maps: {
    mapboxToken: import.meta.env.VITE_MAPBOX_TOKEN || "",
  },
};

// Type-safe environment variable validation
const validateEnv = () => {
  const required = ["VITE_PORT", "VITE_API_URL", "VITE_APP_NAME"];

  const missing = required.filter((key) => !(key in import.meta.env));

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(", ")}`,
    );
  }
};

// Run validation
validateEnv();
