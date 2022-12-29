import { PartialType } from "@nestjs/mapped-types";
import { FindOauthProdiverDto } from "src/oauth-providers/dto/find-oauth-provider.dto";
import { UserEntity } from "../user.entity";

export class FindOneUserDto extends PartialType(UserEntity) {
  oauthProviders?: FindOauthProdiverDto;
}

