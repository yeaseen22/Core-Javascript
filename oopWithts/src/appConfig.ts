type Envirement = "development" | "staging" | "production";

interface DatabaseConfig {
  url: string;
  poolSize: number;
}

interface ServerConfig {
  port: number;
  apiUrl: string;
}

interface SecurityConfig {
  jwtSecret: string;
  corsOrigins: string[];
}

export class AppConfig {
  private static instance: AppConfig;

  private envirement: Envirement;
  private database: DatabaseConfig;
  private server: ServerConfig;
  private security: SecurityConfig;

  private constructor() {
    this.envirement = this.loadEnvirement();
    this.database = this.loadDatabaseConfig();
    this.server = this.loadServerConfig();
    this.security = this.loadSecurityConfig();
  }

  static getInstance(): AppConfig {
    if (!AppConfig.instance) {
      console.log("Creating new instance of AppConfig");
      AppConfig.instance = new AppConfig();
    }

    return AppConfig.instance;
  }

  private loadEnvirement(): Envirement {
    const env = (process.env.NODE_ENV || "development") as Envirement;
    if (!["development", "staging", "production"].includes(env)) {
      throw new Error("Invalid NODE_ENV_VALUE: " + env);
    }

    return env;
  }

  private loadDatabaseConfig(): DatabaseConfig {
    const url = process.env.DATABASE_URL;
    const poolSize = parseInt(process.env.DATABASE_POOL_SIZE || "10");

    if (!url) {
      throw new Error("❌ DATABASE_URL is missing in environment variables.");
    }

    return { url, poolSize };
  }

  private loadServerConfig(): ServerConfig {
    const port = parseInt(process.env.PORT || "3000");
    const apiUrl = process.env.API_URL || "http://localhost:3000";

    return { port, apiUrl };
  }

  private loadSecurityConfig(): SecurityConfig {
    const jwtSecret = process.env.JWT_SECRET;
    const corsOrigins = (process.env.CORS_ORIGINS || "*")
      .split(",")
      .map((origin) => origin.trim());

    if (!jwtSecret) {
      throw new Error("❌ JWT_SECRET is missing in environment variables.");
    }

    return { jwtSecret, corsOrigins };
  }

  getEnvironment(): Envirement {
    return this.envirement;
  }

  getDatabaseConfig(): DatabaseConfig {
    return this.database;
  }

  getServerConfig(): ServerConfig {
    return this.server;
  }

  getSecurityConfig(): SecurityConfig {
    return this.security;
  }
}
