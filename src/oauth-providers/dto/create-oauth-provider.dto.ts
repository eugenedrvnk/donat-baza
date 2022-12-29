import { OmitType } from "@nestjs/mapped-types";
import { BaseEntity } from "src/database/base.entity";
import { OauthProviderEntity } from "../oauth-provider.entity";

export class CreateOauthProviderDto {
  accessToken: string;
  refreshToken: string;
  profileId: string;
  type: "twitch" | "youtube";
  userId: number;
}