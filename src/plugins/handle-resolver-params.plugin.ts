/* eslint-disable @typescript-eslint/no-unused-vars */
import { PluginDefinition } from 'apollo-server-core'
import {
   BaseContext,
   GraphQLFieldResolverParams,
} from 'apollo-server-plugin-base'
import { NodeEnv } from '~/interface'

export type ResolverParams = GraphQLFieldResolverParams<
   any,
   BaseContext,
   { [argName: string]: any }
>

export const HandleResolverParams: PluginDefinition = {
   async requestDidStart() {
      return {
         async executionDidStart() {
            return {
               willResolveField({ info }: ResolverParams) {
                  /**
                   * * Executing before the resolver is called
                   */
                  // console.log(
                  //    'willResolveField runs before the resolver is called'
                  // )
                  // console.log(`${info.parentType.name}.${info.fieldName}`)

                  return (error) => {
                     /**
                      * * Executing after the resolver has fully resolved
                      */
                     // console.log(
                     //    'resolver has fully resolved',
                     //    error,
                     //    `${info.parentType.name}.${info.fieldName}`
                     // )
                  }
               },
            }
         },
         async willSendResponse(requestContext) {
            /**
             * * willSendResponse is called before Apollo Server sends a response to the client
             */
            // console.log('willSendResponse', requestContext.response)
         },
      }
   },
}
