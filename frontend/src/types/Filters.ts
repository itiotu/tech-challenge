export type Filters = {
    [FilterTypes: string]: boolean
}

export enum FilterTypes  {
    SUPPORT_US = 'SUPPORT_US',
    SUPPORT_TEST = 'SUPPORT_TEST'
}
