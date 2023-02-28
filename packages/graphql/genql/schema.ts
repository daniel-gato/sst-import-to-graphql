import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    Boolean: boolean,
    String: string,
}

export interface Foo {
    status: Status
    __typename: 'Foo'
}

export interface Query {
    foo: Foo
    __typename: 'Query'
}

export type Status = 'Draft' | 'Published'

export interface FooRequest{
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryRequest{
    foo?: FooRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


const Foo_possibleTypes: string[] = ['Foo']
export const isFoo = (obj?: { __typename?: any } | null): obj is Foo => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isFoo"')
  return Foo_possibleTypes.includes(obj.__typename)
}



const Query_possibleTypes: string[] = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}


export interface FooPromiseChain{
    status: ({get: (request?: boolean|number, defaultValue?: Status) => Promise<Status>})
}

export interface FooObservableChain{
    status: ({get: (request?: boolean|number, defaultValue?: Status) => Observable<Status>})
}

export interface QueryPromiseChain{
    foo: (FooPromiseChain & {get: <R extends FooRequest>(request: R, defaultValue?: FieldsSelection<Foo, R>) => Promise<FieldsSelection<Foo, R>>})
}

export interface QueryObservableChain{
    foo: (FooObservableChain & {get: <R extends FooRequest>(request: R, defaultValue?: FieldsSelection<Foo, R>) => Observable<FieldsSelection<Foo, R>>})
}