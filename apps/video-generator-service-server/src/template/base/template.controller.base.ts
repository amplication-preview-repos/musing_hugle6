/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TemplateService } from "../template.service";
import { TemplateCreateInput } from "./TemplateCreateInput";
import { Template } from "./Template";
import { TemplateFindManyArgs } from "./TemplateFindManyArgs";
import { TemplateWhereUniqueInput } from "./TemplateWhereUniqueInput";
import { TemplateUpdateInput } from "./TemplateUpdateInput";

export class TemplateControllerBase {
  constructor(protected readonly service: TemplateService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Template })
  async createTemplate(
    @common.Body() data: TemplateCreateInput
  ): Promise<Template> {
    return await this.service.createTemplate({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        organizationId: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Template] })
  @ApiNestedQuery(TemplateFindManyArgs)
  async templates(@common.Req() request: Request): Promise<Template[]> {
    const args = plainToClass(TemplateFindManyArgs, request.query);
    return this.service.templates({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        organizationId: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Template })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async template(
    @common.Param() params: TemplateWhereUniqueInput
  ): Promise<Template | null> {
    const result = await this.service.template({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        organizationId: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Template })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateTemplate(
    @common.Param() params: TemplateWhereUniqueInput,
    @common.Body() data: TemplateUpdateInput
  ): Promise<Template | null> {
    try {
      return await this.service.updateTemplate({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          organizationId: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Template })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTemplate(
    @common.Param() params: TemplateWhereUniqueInput
  ): Promise<Template | null> {
    try {
      return await this.service.deleteTemplate({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          organizationId: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
