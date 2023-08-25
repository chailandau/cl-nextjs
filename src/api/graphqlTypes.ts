export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
    T extends { [key: string]: unknown },
    K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
    | T
    | {
          [P in keyof T]?: P extends ' $fragmentName' | '__typename'
              ? T[P]
              : never;
      };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string };
    String: { input: string; output: string };
    Boolean: { input: boolean; output: boolean };
    Int: { input: number; output: number };
    Float: { input: number; output: number };
    DateTime: { input: any; output: any };
    EmailAddress: { input: any; output: any };
    JSON: { input: any; output: any };
    JSONObject: { input: any; output: any };
};

export type Access = {
    __typename?: 'Access';
    canAccessAdmin: Scalars['Boolean']['output'];
    case_study_listing?: Maybe<Case_Study_ListingAccess>;
    heroes?: Maybe<HeroesAccess>;
    icons?: Maybe<IconsAccess>;
    images?: Maybe<ImagesAccess>;
    nav?: Maybe<NavAccess>;
    pages?: Maybe<PagesAccess>;
    projects?: Maybe<ProjectsAccess>;
    testimonial_listing?: Maybe<Testimonial_ListingAccess>;
    testimonials?: Maybe<TestimonialsAccess>;
    toolbox_listing?: Maybe<Toolbox_ListingAccess>;
    tools?: Maybe<ToolsAccess>;
    users?: Maybe<UsersAccess>;
};

export type CaseStudyListing = {
    __typename?: 'CaseStudyListing';
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    icon?: Maybe<Icon>;
    title?: Maybe<Scalars['String']['output']>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CaseStudyListingIconArgs = {
    where?: InputMaybe<CaseStudyListing_Icon_Where>;
};

export type CaseStudyListingDocAccessFields = {
    __typename?: 'CaseStudyListingDocAccessFields';
    createdAt?: Maybe<CaseStudyListingDocAccessFields_CreatedAt>;
    icon?: Maybe<CaseStudyListingDocAccessFields_Icon>;
    title?: Maybe<CaseStudyListingDocAccessFields_Title>;
    updatedAt?: Maybe<CaseStudyListingDocAccessFields_UpdatedAt>;
};

export type CaseStudyListingDocAccessFields_CreatedAt = {
    __typename?: 'CaseStudyListingDocAccessFields_createdAt';
    create?: Maybe<CaseStudyListingDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<CaseStudyListingDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<CaseStudyListingDocAccessFields_CreatedAt_Read>;
    update?: Maybe<CaseStudyListingDocAccessFields_CreatedAt_Update>;
};

export type CaseStudyListingDocAccessFields_CreatedAt_Create = {
    __typename?: 'CaseStudyListingDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingDocAccessFields_CreatedAt_Delete = {
    __typename?: 'CaseStudyListingDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingDocAccessFields_CreatedAt_Read = {
    __typename?: 'CaseStudyListingDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingDocAccessFields_CreatedAt_Update = {
    __typename?: 'CaseStudyListingDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingDocAccessFields_Icon = {
    __typename?: 'CaseStudyListingDocAccessFields_icon';
    create?: Maybe<CaseStudyListingDocAccessFields_Icon_Create>;
    delete?: Maybe<CaseStudyListingDocAccessFields_Icon_Delete>;
    read?: Maybe<CaseStudyListingDocAccessFields_Icon_Read>;
    update?: Maybe<CaseStudyListingDocAccessFields_Icon_Update>;
};

export type CaseStudyListingDocAccessFields_Icon_Create = {
    __typename?: 'CaseStudyListingDocAccessFields_icon_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingDocAccessFields_Icon_Delete = {
    __typename?: 'CaseStudyListingDocAccessFields_icon_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingDocAccessFields_Icon_Read = {
    __typename?: 'CaseStudyListingDocAccessFields_icon_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingDocAccessFields_Icon_Update = {
    __typename?: 'CaseStudyListingDocAccessFields_icon_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingDocAccessFields_Title = {
    __typename?: 'CaseStudyListingDocAccessFields_title';
    create?: Maybe<CaseStudyListingDocAccessFields_Title_Create>;
    delete?: Maybe<CaseStudyListingDocAccessFields_Title_Delete>;
    read?: Maybe<CaseStudyListingDocAccessFields_Title_Read>;
    update?: Maybe<CaseStudyListingDocAccessFields_Title_Update>;
};

export type CaseStudyListingDocAccessFields_Title_Create = {
    __typename?: 'CaseStudyListingDocAccessFields_title_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingDocAccessFields_Title_Delete = {
    __typename?: 'CaseStudyListingDocAccessFields_title_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingDocAccessFields_Title_Read = {
    __typename?: 'CaseStudyListingDocAccessFields_title_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingDocAccessFields_Title_Update = {
    __typename?: 'CaseStudyListingDocAccessFields_title_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingDocAccessFields_UpdatedAt = {
    __typename?: 'CaseStudyListingDocAccessFields_updatedAt';
    create?: Maybe<CaseStudyListingDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<CaseStudyListingDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<CaseStudyListingDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<CaseStudyListingDocAccessFields_UpdatedAt_Update>;
};

export type CaseStudyListingDocAccessFields_UpdatedAt_Create = {
    __typename?: 'CaseStudyListingDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'CaseStudyListingDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingDocAccessFields_UpdatedAt_Read = {
    __typename?: 'CaseStudyListingDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingDocAccessFields_UpdatedAt_Update = {
    __typename?: 'CaseStudyListingDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingFields = {
    __typename?: 'CaseStudyListingFields';
    createdAt?: Maybe<CaseStudyListingFields_CreatedAt>;
    icon?: Maybe<CaseStudyListingFields_Icon>;
    title?: Maybe<CaseStudyListingFields_Title>;
    updatedAt?: Maybe<CaseStudyListingFields_UpdatedAt>;
};

export type CaseStudyListingFields_CreatedAt = {
    __typename?: 'CaseStudyListingFields_createdAt';
    create?: Maybe<CaseStudyListingFields_CreatedAt_Create>;
    delete?: Maybe<CaseStudyListingFields_CreatedAt_Delete>;
    read?: Maybe<CaseStudyListingFields_CreatedAt_Read>;
    update?: Maybe<CaseStudyListingFields_CreatedAt_Update>;
};

export type CaseStudyListingFields_CreatedAt_Create = {
    __typename?: 'CaseStudyListingFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingFields_CreatedAt_Delete = {
    __typename?: 'CaseStudyListingFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingFields_CreatedAt_Read = {
    __typename?: 'CaseStudyListingFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingFields_CreatedAt_Update = {
    __typename?: 'CaseStudyListingFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingFields_Icon = {
    __typename?: 'CaseStudyListingFields_icon';
    create?: Maybe<CaseStudyListingFields_Icon_Create>;
    delete?: Maybe<CaseStudyListingFields_Icon_Delete>;
    read?: Maybe<CaseStudyListingFields_Icon_Read>;
    update?: Maybe<CaseStudyListingFields_Icon_Update>;
};

export type CaseStudyListingFields_Icon_Create = {
    __typename?: 'CaseStudyListingFields_icon_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingFields_Icon_Delete = {
    __typename?: 'CaseStudyListingFields_icon_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingFields_Icon_Read = {
    __typename?: 'CaseStudyListingFields_icon_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingFields_Icon_Update = {
    __typename?: 'CaseStudyListingFields_icon_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingFields_Title = {
    __typename?: 'CaseStudyListingFields_title';
    create?: Maybe<CaseStudyListingFields_Title_Create>;
    delete?: Maybe<CaseStudyListingFields_Title_Delete>;
    read?: Maybe<CaseStudyListingFields_Title_Read>;
    update?: Maybe<CaseStudyListingFields_Title_Update>;
};

export type CaseStudyListingFields_Title_Create = {
    __typename?: 'CaseStudyListingFields_title_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingFields_Title_Delete = {
    __typename?: 'CaseStudyListingFields_title_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingFields_Title_Read = {
    __typename?: 'CaseStudyListingFields_title_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingFields_Title_Update = {
    __typename?: 'CaseStudyListingFields_title_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingFields_UpdatedAt = {
    __typename?: 'CaseStudyListingFields_updatedAt';
    create?: Maybe<CaseStudyListingFields_UpdatedAt_Create>;
    delete?: Maybe<CaseStudyListingFields_UpdatedAt_Delete>;
    read?: Maybe<CaseStudyListingFields_UpdatedAt_Read>;
    update?: Maybe<CaseStudyListingFields_UpdatedAt_Update>;
};

export type CaseStudyListingFields_UpdatedAt_Create = {
    __typename?: 'CaseStudyListingFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingFields_UpdatedAt_Delete = {
    __typename?: 'CaseStudyListingFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingFields_UpdatedAt_Read = {
    __typename?: 'CaseStudyListingFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingFields_UpdatedAt_Update = {
    __typename?: 'CaseStudyListingFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingReadAccess = {
    __typename?: 'CaseStudyListingReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CaseStudyListingReadDocAccess = {
    __typename?: 'CaseStudyListingReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CaseStudyListingUpdateAccess = {
    __typename?: 'CaseStudyListingUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CaseStudyListingUpdateDocAccess = {
    __typename?: 'CaseStudyListingUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CaseStudyListing_Icon_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudyListing_Icon_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CaseStudyListing_Icon_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudyListing_Icon_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type CaseStudyListing_Icon_Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type CaseStudyListing_Icon_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudyListing_Icon_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudyListing_Icon_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudyListing_Icon_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type CaseStudyListing_Icon_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type CaseStudyListing_Icon_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudyListing_Icon_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudyListing_Icon_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type CaseStudyListing_Icon_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CaseStudyListing_Icon_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudyListing_Icon_Where = {
    AND?: InputMaybe<Array<InputMaybe<CaseStudyListing_Icon_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<CaseStudyListing_Icon_Where_Or>>>;
    alt?: InputMaybe<CaseStudyListing_Icon_Alt_Operator>;
    createdAt?: InputMaybe<CaseStudyListing_Icon_CreatedAt_Operator>;
    filename?: InputMaybe<CaseStudyListing_Icon_Filename_Operator>;
    filesize?: InputMaybe<CaseStudyListing_Icon_Filesize_Operator>;
    height?: InputMaybe<CaseStudyListing_Icon_Height_Operator>;
    id?: InputMaybe<CaseStudyListing_Icon_Id_Operator>;
    mimeType?: InputMaybe<CaseStudyListing_Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<CaseStudyListing_Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<CaseStudyListing_Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<CaseStudyListing_Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<CaseStudyListing_Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<CaseStudyListing_Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<CaseStudyListing_Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<CaseStudyListing_Icon_UpdatedAt_Operator>;
    url?: InputMaybe<CaseStudyListing_Icon_Url_Operator>;
    width?: InputMaybe<CaseStudyListing_Icon_Width_Operator>;
};

export type CaseStudyListing_Icon_Where_And = {
    alt?: InputMaybe<CaseStudyListing_Icon_Alt_Operator>;
    createdAt?: InputMaybe<CaseStudyListing_Icon_CreatedAt_Operator>;
    filename?: InputMaybe<CaseStudyListing_Icon_Filename_Operator>;
    filesize?: InputMaybe<CaseStudyListing_Icon_Filesize_Operator>;
    height?: InputMaybe<CaseStudyListing_Icon_Height_Operator>;
    id?: InputMaybe<CaseStudyListing_Icon_Id_Operator>;
    mimeType?: InputMaybe<CaseStudyListing_Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<CaseStudyListing_Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<CaseStudyListing_Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<CaseStudyListing_Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<CaseStudyListing_Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<CaseStudyListing_Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<CaseStudyListing_Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<CaseStudyListing_Icon_UpdatedAt_Operator>;
    url?: InputMaybe<CaseStudyListing_Icon_Url_Operator>;
    width?: InputMaybe<CaseStudyListing_Icon_Width_Operator>;
};

export type CaseStudyListing_Icon_Where_Or = {
    alt?: InputMaybe<CaseStudyListing_Icon_Alt_Operator>;
    createdAt?: InputMaybe<CaseStudyListing_Icon_CreatedAt_Operator>;
    filename?: InputMaybe<CaseStudyListing_Icon_Filename_Operator>;
    filesize?: InputMaybe<CaseStudyListing_Icon_Filesize_Operator>;
    height?: InputMaybe<CaseStudyListing_Icon_Height_Operator>;
    id?: InputMaybe<CaseStudyListing_Icon_Id_Operator>;
    mimeType?: InputMaybe<CaseStudyListing_Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<CaseStudyListing_Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<CaseStudyListing_Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<CaseStudyListing_Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<CaseStudyListing_Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<CaseStudyListing_Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<CaseStudyListing_Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<CaseStudyListing_Icon_UpdatedAt_Operator>;
    url?: InputMaybe<CaseStudyListing_Icon_Url_Operator>;
    width?: InputMaybe<CaseStudyListing_Icon_Width_Operator>;
};

export type CaseStudyListing_Icon_Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Hero = {
    __typename?: 'Hero';
    coloredSubhead?: Maybe<Scalars['JSON']['output']>;
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    heading: Scalars['String']['output'];
    headingTag: Scalars['String']['output'];
    icon?: Maybe<Icon>;
    id?: Maybe<Scalars['String']['output']>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HeroColoredSubheadArgs = {
    depth?: InputMaybe<Scalars['Int']['input']>;
};

export type HeroIconArgs = {
    where?: InputMaybe<Hero_Icon_Where>;
};

export type Hero_Icon_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Hero_Icon_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Hero_Icon_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Hero_Icon_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Hero_Icon_Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Hero_Icon_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Hero_Icon_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Hero_Icon_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Hero_Icon_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Hero_Icon_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Hero_Icon_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Hero_Icon_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Hero_Icon_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Hero_Icon_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Hero_Icon_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Hero_Icon_Where = {
    AND?: InputMaybe<Array<InputMaybe<Hero_Icon_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<Hero_Icon_Where_Or>>>;
    alt?: InputMaybe<Hero_Icon_Alt_Operator>;
    createdAt?: InputMaybe<Hero_Icon_CreatedAt_Operator>;
    filename?: InputMaybe<Hero_Icon_Filename_Operator>;
    filesize?: InputMaybe<Hero_Icon_Filesize_Operator>;
    height?: InputMaybe<Hero_Icon_Height_Operator>;
    id?: InputMaybe<Hero_Icon_Id_Operator>;
    mimeType?: InputMaybe<Hero_Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Hero_Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Hero_Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Hero_Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Hero_Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Hero_Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Hero_Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Hero_Icon_UpdatedAt_Operator>;
    url?: InputMaybe<Hero_Icon_Url_Operator>;
    width?: InputMaybe<Hero_Icon_Width_Operator>;
};

export type Hero_Icon_Where_And = {
    alt?: InputMaybe<Hero_Icon_Alt_Operator>;
    createdAt?: InputMaybe<Hero_Icon_CreatedAt_Operator>;
    filename?: InputMaybe<Hero_Icon_Filename_Operator>;
    filesize?: InputMaybe<Hero_Icon_Filesize_Operator>;
    height?: InputMaybe<Hero_Icon_Height_Operator>;
    id?: InputMaybe<Hero_Icon_Id_Operator>;
    mimeType?: InputMaybe<Hero_Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Hero_Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Hero_Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Hero_Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Hero_Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Hero_Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Hero_Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Hero_Icon_UpdatedAt_Operator>;
    url?: InputMaybe<Hero_Icon_Url_Operator>;
    width?: InputMaybe<Hero_Icon_Width_Operator>;
};

export type Hero_Icon_Where_Or = {
    alt?: InputMaybe<Hero_Icon_Alt_Operator>;
    createdAt?: InputMaybe<Hero_Icon_CreatedAt_Operator>;
    filename?: InputMaybe<Hero_Icon_Filename_Operator>;
    filesize?: InputMaybe<Hero_Icon_Filesize_Operator>;
    height?: InputMaybe<Hero_Icon_Height_Operator>;
    id?: InputMaybe<Hero_Icon_Id_Operator>;
    mimeType?: InputMaybe<Hero_Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Hero_Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Hero_Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Hero_Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Hero_Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Hero_Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Hero_Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Hero_Icon_UpdatedAt_Operator>;
    url?: InputMaybe<Hero_Icon_Url_Operator>;
    width?: InputMaybe<Hero_Icon_Width_Operator>;
};

export type Hero_Icon_Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Hero_ColoredSubhead_Operator = {
    contains?: InputMaybe<Scalars['JSON']['input']>;
    equals?: InputMaybe<Scalars['JSON']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    like?: InputMaybe<Scalars['JSON']['input']>;
    not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type Hero_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Hero_HeadingTag_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Hero_Heading_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Hero_Icon_Operator = {
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Hero_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Hero_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Hero_Where = {
    AND?: InputMaybe<Array<InputMaybe<Hero_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<Hero_Where_Or>>>;
    coloredSubhead?: InputMaybe<Hero_ColoredSubhead_Operator>;
    createdAt?: InputMaybe<Hero_CreatedAt_Operator>;
    heading?: InputMaybe<Hero_Heading_Operator>;
    headingTag?: InputMaybe<Hero_HeadingTag_Operator>;
    icon?: InputMaybe<Hero_Icon_Operator>;
    id?: InputMaybe<Hero_Id_Operator>;
    updatedAt?: InputMaybe<Hero_UpdatedAt_Operator>;
};

export type Hero_Where_And = {
    coloredSubhead?: InputMaybe<Hero_ColoredSubhead_Operator>;
    createdAt?: InputMaybe<Hero_CreatedAt_Operator>;
    heading?: InputMaybe<Hero_Heading_Operator>;
    headingTag?: InputMaybe<Hero_HeadingTag_Operator>;
    icon?: InputMaybe<Hero_Icon_Operator>;
    id?: InputMaybe<Hero_Id_Operator>;
    updatedAt?: InputMaybe<Hero_UpdatedAt_Operator>;
};

export type Hero_Where_Or = {
    coloredSubhead?: InputMaybe<Hero_ColoredSubhead_Operator>;
    createdAt?: InputMaybe<Hero_CreatedAt_Operator>;
    heading?: InputMaybe<Hero_Heading_Operator>;
    headingTag?: InputMaybe<Hero_HeadingTag_Operator>;
    icon?: InputMaybe<Hero_Icon_Operator>;
    id?: InputMaybe<Hero_Id_Operator>;
    updatedAt?: InputMaybe<Hero_UpdatedAt_Operator>;
};

export type Heroes = {
    __typename?: 'Heroes';
    docs?: Maybe<Array<Maybe<Hero>>>;
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
    hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
    limit?: Maybe<Scalars['Int']['output']>;
    nextPage?: Maybe<Scalars['Int']['output']>;
    offset?: Maybe<Scalars['Int']['output']>;
    page?: Maybe<Scalars['Int']['output']>;
    pagingCounter?: Maybe<Scalars['Int']['output']>;
    prevPage?: Maybe<Scalars['Int']['output']>;
    totalDocs?: Maybe<Scalars['Int']['output']>;
    totalPages?: Maybe<Scalars['Int']['output']>;
};

export type HeroesCreateAccess = {
    __typename?: 'HeroesCreateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeroesCreateDocAccess = {
    __typename?: 'HeroesCreateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeroesDeleteAccess = {
    __typename?: 'HeroesDeleteAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeroesDeleteDocAccess = {
    __typename?: 'HeroesDeleteDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeroesDocAccessFields = {
    __typename?: 'HeroesDocAccessFields';
    coloredSubhead?: Maybe<HeroesDocAccessFields_ColoredSubhead>;
    createdAt?: Maybe<HeroesDocAccessFields_CreatedAt>;
    heading?: Maybe<HeroesDocAccessFields_Heading>;
    headingTag?: Maybe<HeroesDocAccessFields_HeadingTag>;
    icon?: Maybe<HeroesDocAccessFields_Icon>;
    updatedAt?: Maybe<HeroesDocAccessFields_UpdatedAt>;
};

export type HeroesDocAccessFields_ColoredSubhead = {
    __typename?: 'HeroesDocAccessFields_coloredSubhead';
    create?: Maybe<HeroesDocAccessFields_ColoredSubhead_Create>;
    delete?: Maybe<HeroesDocAccessFields_ColoredSubhead_Delete>;
    read?: Maybe<HeroesDocAccessFields_ColoredSubhead_Read>;
    update?: Maybe<HeroesDocAccessFields_ColoredSubhead_Update>;
};

export type HeroesDocAccessFields_ColoredSubhead_Create = {
    __typename?: 'HeroesDocAccessFields_coloredSubhead_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_ColoredSubhead_Delete = {
    __typename?: 'HeroesDocAccessFields_coloredSubhead_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_ColoredSubhead_Read = {
    __typename?: 'HeroesDocAccessFields_coloredSubhead_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_ColoredSubhead_Update = {
    __typename?: 'HeroesDocAccessFields_coloredSubhead_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_CreatedAt = {
    __typename?: 'HeroesDocAccessFields_createdAt';
    create?: Maybe<HeroesDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<HeroesDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<HeroesDocAccessFields_CreatedAt_Read>;
    update?: Maybe<HeroesDocAccessFields_CreatedAt_Update>;
};

export type HeroesDocAccessFields_CreatedAt_Create = {
    __typename?: 'HeroesDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_CreatedAt_Delete = {
    __typename?: 'HeroesDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_CreatedAt_Read = {
    __typename?: 'HeroesDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_CreatedAt_Update = {
    __typename?: 'HeroesDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Heading = {
    __typename?: 'HeroesDocAccessFields_heading';
    create?: Maybe<HeroesDocAccessFields_Heading_Create>;
    delete?: Maybe<HeroesDocAccessFields_Heading_Delete>;
    read?: Maybe<HeroesDocAccessFields_Heading_Read>;
    update?: Maybe<HeroesDocAccessFields_Heading_Update>;
};

export type HeroesDocAccessFields_HeadingTag = {
    __typename?: 'HeroesDocAccessFields_headingTag';
    create?: Maybe<HeroesDocAccessFields_HeadingTag_Create>;
    delete?: Maybe<HeroesDocAccessFields_HeadingTag_Delete>;
    read?: Maybe<HeroesDocAccessFields_HeadingTag_Read>;
    update?: Maybe<HeroesDocAccessFields_HeadingTag_Update>;
};

export type HeroesDocAccessFields_HeadingTag_Create = {
    __typename?: 'HeroesDocAccessFields_headingTag_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_HeadingTag_Delete = {
    __typename?: 'HeroesDocAccessFields_headingTag_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_HeadingTag_Read = {
    __typename?: 'HeroesDocAccessFields_headingTag_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_HeadingTag_Update = {
    __typename?: 'HeroesDocAccessFields_headingTag_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Heading_Create = {
    __typename?: 'HeroesDocAccessFields_heading_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Heading_Delete = {
    __typename?: 'HeroesDocAccessFields_heading_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Heading_Read = {
    __typename?: 'HeroesDocAccessFields_heading_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Heading_Update = {
    __typename?: 'HeroesDocAccessFields_heading_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Icon = {
    __typename?: 'HeroesDocAccessFields_icon';
    create?: Maybe<HeroesDocAccessFields_Icon_Create>;
    delete?: Maybe<HeroesDocAccessFields_Icon_Delete>;
    read?: Maybe<HeroesDocAccessFields_Icon_Read>;
    update?: Maybe<HeroesDocAccessFields_Icon_Update>;
};

export type HeroesDocAccessFields_Icon_Create = {
    __typename?: 'HeroesDocAccessFields_icon_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Icon_Delete = {
    __typename?: 'HeroesDocAccessFields_icon_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Icon_Read = {
    __typename?: 'HeroesDocAccessFields_icon_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Icon_Update = {
    __typename?: 'HeroesDocAccessFields_icon_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_UpdatedAt = {
    __typename?: 'HeroesDocAccessFields_updatedAt';
    create?: Maybe<HeroesDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<HeroesDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<HeroesDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<HeroesDocAccessFields_UpdatedAt_Update>;
};

export type HeroesDocAccessFields_UpdatedAt_Create = {
    __typename?: 'HeroesDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'HeroesDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_UpdatedAt_Read = {
    __typename?: 'HeroesDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_UpdatedAt_Update = {
    __typename?: 'HeroesDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields = {
    __typename?: 'HeroesFields';
    coloredSubhead?: Maybe<HeroesFields_ColoredSubhead>;
    createdAt?: Maybe<HeroesFields_CreatedAt>;
    heading?: Maybe<HeroesFields_Heading>;
    headingTag?: Maybe<HeroesFields_HeadingTag>;
    icon?: Maybe<HeroesFields_Icon>;
    updatedAt?: Maybe<HeroesFields_UpdatedAt>;
};

export type HeroesFields_ColoredSubhead = {
    __typename?: 'HeroesFields_coloredSubhead';
    create?: Maybe<HeroesFields_ColoredSubhead_Create>;
    delete?: Maybe<HeroesFields_ColoredSubhead_Delete>;
    read?: Maybe<HeroesFields_ColoredSubhead_Read>;
    update?: Maybe<HeroesFields_ColoredSubhead_Update>;
};

export type HeroesFields_ColoredSubhead_Create = {
    __typename?: 'HeroesFields_coloredSubhead_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_ColoredSubhead_Delete = {
    __typename?: 'HeroesFields_coloredSubhead_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_ColoredSubhead_Read = {
    __typename?: 'HeroesFields_coloredSubhead_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_ColoredSubhead_Update = {
    __typename?: 'HeroesFields_coloredSubhead_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_CreatedAt = {
    __typename?: 'HeroesFields_createdAt';
    create?: Maybe<HeroesFields_CreatedAt_Create>;
    delete?: Maybe<HeroesFields_CreatedAt_Delete>;
    read?: Maybe<HeroesFields_CreatedAt_Read>;
    update?: Maybe<HeroesFields_CreatedAt_Update>;
};

export type HeroesFields_CreatedAt_Create = {
    __typename?: 'HeroesFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_CreatedAt_Delete = {
    __typename?: 'HeroesFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_CreatedAt_Read = {
    __typename?: 'HeroesFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_CreatedAt_Update = {
    __typename?: 'HeroesFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Heading = {
    __typename?: 'HeroesFields_heading';
    create?: Maybe<HeroesFields_Heading_Create>;
    delete?: Maybe<HeroesFields_Heading_Delete>;
    read?: Maybe<HeroesFields_Heading_Read>;
    update?: Maybe<HeroesFields_Heading_Update>;
};

export type HeroesFields_HeadingTag = {
    __typename?: 'HeroesFields_headingTag';
    create?: Maybe<HeroesFields_HeadingTag_Create>;
    delete?: Maybe<HeroesFields_HeadingTag_Delete>;
    read?: Maybe<HeroesFields_HeadingTag_Read>;
    update?: Maybe<HeroesFields_HeadingTag_Update>;
};

export type HeroesFields_HeadingTag_Create = {
    __typename?: 'HeroesFields_headingTag_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_HeadingTag_Delete = {
    __typename?: 'HeroesFields_headingTag_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_HeadingTag_Read = {
    __typename?: 'HeroesFields_headingTag_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_HeadingTag_Update = {
    __typename?: 'HeroesFields_headingTag_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Heading_Create = {
    __typename?: 'HeroesFields_heading_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Heading_Delete = {
    __typename?: 'HeroesFields_heading_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Heading_Read = {
    __typename?: 'HeroesFields_heading_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Heading_Update = {
    __typename?: 'HeroesFields_heading_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Icon = {
    __typename?: 'HeroesFields_icon';
    create?: Maybe<HeroesFields_Icon_Create>;
    delete?: Maybe<HeroesFields_Icon_Delete>;
    read?: Maybe<HeroesFields_Icon_Read>;
    update?: Maybe<HeroesFields_Icon_Update>;
};

export type HeroesFields_Icon_Create = {
    __typename?: 'HeroesFields_icon_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Icon_Delete = {
    __typename?: 'HeroesFields_icon_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Icon_Read = {
    __typename?: 'HeroesFields_icon_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Icon_Update = {
    __typename?: 'HeroesFields_icon_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_UpdatedAt = {
    __typename?: 'HeroesFields_updatedAt';
    create?: Maybe<HeroesFields_UpdatedAt_Create>;
    delete?: Maybe<HeroesFields_UpdatedAt_Delete>;
    read?: Maybe<HeroesFields_UpdatedAt_Read>;
    update?: Maybe<HeroesFields_UpdatedAt_Update>;
};

export type HeroesFields_UpdatedAt_Create = {
    __typename?: 'HeroesFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_UpdatedAt_Delete = {
    __typename?: 'HeroesFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_UpdatedAt_Read = {
    __typename?: 'HeroesFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_UpdatedAt_Update = {
    __typename?: 'HeroesFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesReadAccess = {
    __typename?: 'HeroesReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeroesReadDocAccess = {
    __typename?: 'HeroesReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeroesUpdateAccess = {
    __typename?: 'HeroesUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type HeroesUpdateDocAccess = {
    __typename?: 'HeroesUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Icon = {
    __typename?: 'Icon';
    alt: Scalars['String']['output'];
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    filename?: Maybe<Scalars['String']['output']>;
    filesize?: Maybe<Scalars['Float']['output']>;
    height?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    mimeType?: Maybe<Scalars['String']['output']>;
    sizes?: Maybe<Icon_Sizes>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
    url?: Maybe<Scalars['String']['output']>;
    width?: Maybe<Scalars['Float']['output']>;
};

export type Icon_Sizes = {
    __typename?: 'Icon_Sizes';
    thumbnail?: Maybe<Icon_Sizes_Thumbnail>;
};

export type Icon_Sizes_Thumbnail = {
    __typename?: 'Icon_Sizes_Thumbnail';
    filename?: Maybe<Scalars['String']['output']>;
    filesize?: Maybe<Scalars['Float']['output']>;
    height?: Maybe<Scalars['Float']['output']>;
    mimeType?: Maybe<Scalars['String']['output']>;
    url?: Maybe<Scalars['String']['output']>;
    width?: Maybe<Scalars['Float']['output']>;
};

export type Icon_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Icon_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Icon_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Icon_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Icon_Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Icon_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Icon_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Icon_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Icon_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Icon_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Icon_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Icon_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Icon_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Icon_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Icon_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Icon_Where = {
    AND?: InputMaybe<Array<InputMaybe<Icon_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<Icon_Where_Or>>>;
    alt?: InputMaybe<Icon_Alt_Operator>;
    createdAt?: InputMaybe<Icon_CreatedAt_Operator>;
    filename?: InputMaybe<Icon_Filename_Operator>;
    filesize?: InputMaybe<Icon_Filesize_Operator>;
    height?: InputMaybe<Icon_Height_Operator>;
    id?: InputMaybe<Icon_Id_Operator>;
    mimeType?: InputMaybe<Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Icon_UpdatedAt_Operator>;
    url?: InputMaybe<Icon_Url_Operator>;
    width?: InputMaybe<Icon_Width_Operator>;
};

export type Icon_Where_And = {
    alt?: InputMaybe<Icon_Alt_Operator>;
    createdAt?: InputMaybe<Icon_CreatedAt_Operator>;
    filename?: InputMaybe<Icon_Filename_Operator>;
    filesize?: InputMaybe<Icon_Filesize_Operator>;
    height?: InputMaybe<Icon_Height_Operator>;
    id?: InputMaybe<Icon_Id_Operator>;
    mimeType?: InputMaybe<Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Icon_UpdatedAt_Operator>;
    url?: InputMaybe<Icon_Url_Operator>;
    width?: InputMaybe<Icon_Width_Operator>;
};

export type Icon_Where_Or = {
    alt?: InputMaybe<Icon_Alt_Operator>;
    createdAt?: InputMaybe<Icon_CreatedAt_Operator>;
    filename?: InputMaybe<Icon_Filename_Operator>;
    filesize?: InputMaybe<Icon_Filesize_Operator>;
    height?: InputMaybe<Icon_Height_Operator>;
    id?: InputMaybe<Icon_Id_Operator>;
    mimeType?: InputMaybe<Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Icon_UpdatedAt_Operator>;
    url?: InputMaybe<Icon_Url_Operator>;
    width?: InputMaybe<Icon_Width_Operator>;
};

export type Icon_Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Icons = {
    __typename?: 'Icons';
    docs?: Maybe<Array<Maybe<Icon>>>;
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
    hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
    limit?: Maybe<Scalars['Int']['output']>;
    nextPage?: Maybe<Scalars['Int']['output']>;
    offset?: Maybe<Scalars['Int']['output']>;
    page?: Maybe<Scalars['Int']['output']>;
    pagingCounter?: Maybe<Scalars['Int']['output']>;
    prevPage?: Maybe<Scalars['Int']['output']>;
    totalDocs?: Maybe<Scalars['Int']['output']>;
    totalPages?: Maybe<Scalars['Int']['output']>;
};

export type IconsCreateAccess = {
    __typename?: 'IconsCreateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type IconsCreateDocAccess = {
    __typename?: 'IconsCreateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type IconsDeleteAccess = {
    __typename?: 'IconsDeleteAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type IconsDeleteDocAccess = {
    __typename?: 'IconsDeleteDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type IconsDocAccessFields = {
    __typename?: 'IconsDocAccessFields';
    alt?: Maybe<IconsDocAccessFields_Alt>;
    createdAt?: Maybe<IconsDocAccessFields_CreatedAt>;
    filename?: Maybe<IconsDocAccessFields_Filename>;
    filesize?: Maybe<IconsDocAccessFields_Filesize>;
    height?: Maybe<IconsDocAccessFields_Height>;
    mimeType?: Maybe<IconsDocAccessFields_MimeType>;
    sizes?: Maybe<IconsDocAccessFields_Sizes>;
    updatedAt?: Maybe<IconsDocAccessFields_UpdatedAt>;
    url?: Maybe<IconsDocAccessFields_Url>;
    width?: Maybe<IconsDocAccessFields_Width>;
};

export type IconsDocAccessFields_Alt = {
    __typename?: 'IconsDocAccessFields_alt';
    create?: Maybe<IconsDocAccessFields_Alt_Create>;
    delete?: Maybe<IconsDocAccessFields_Alt_Delete>;
    read?: Maybe<IconsDocAccessFields_Alt_Read>;
    update?: Maybe<IconsDocAccessFields_Alt_Update>;
};

export type IconsDocAccessFields_Alt_Create = {
    __typename?: 'IconsDocAccessFields_alt_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Alt_Delete = {
    __typename?: 'IconsDocAccessFields_alt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Alt_Read = {
    __typename?: 'IconsDocAccessFields_alt_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Alt_Update = {
    __typename?: 'IconsDocAccessFields_alt_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_CreatedAt = {
    __typename?: 'IconsDocAccessFields_createdAt';
    create?: Maybe<IconsDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<IconsDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<IconsDocAccessFields_CreatedAt_Read>;
    update?: Maybe<IconsDocAccessFields_CreatedAt_Update>;
};

export type IconsDocAccessFields_CreatedAt_Create = {
    __typename?: 'IconsDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_CreatedAt_Delete = {
    __typename?: 'IconsDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_CreatedAt_Read = {
    __typename?: 'IconsDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_CreatedAt_Update = {
    __typename?: 'IconsDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Filename = {
    __typename?: 'IconsDocAccessFields_filename';
    create?: Maybe<IconsDocAccessFields_Filename_Create>;
    delete?: Maybe<IconsDocAccessFields_Filename_Delete>;
    read?: Maybe<IconsDocAccessFields_Filename_Read>;
    update?: Maybe<IconsDocAccessFields_Filename_Update>;
};

export type IconsDocAccessFields_Filename_Create = {
    __typename?: 'IconsDocAccessFields_filename_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Filename_Delete = {
    __typename?: 'IconsDocAccessFields_filename_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Filename_Read = {
    __typename?: 'IconsDocAccessFields_filename_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Filename_Update = {
    __typename?: 'IconsDocAccessFields_filename_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Filesize = {
    __typename?: 'IconsDocAccessFields_filesize';
    create?: Maybe<IconsDocAccessFields_Filesize_Create>;
    delete?: Maybe<IconsDocAccessFields_Filesize_Delete>;
    read?: Maybe<IconsDocAccessFields_Filesize_Read>;
    update?: Maybe<IconsDocAccessFields_Filesize_Update>;
};

export type IconsDocAccessFields_Filesize_Create = {
    __typename?: 'IconsDocAccessFields_filesize_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Filesize_Delete = {
    __typename?: 'IconsDocAccessFields_filesize_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Filesize_Read = {
    __typename?: 'IconsDocAccessFields_filesize_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Filesize_Update = {
    __typename?: 'IconsDocAccessFields_filesize_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Height = {
    __typename?: 'IconsDocAccessFields_height';
    create?: Maybe<IconsDocAccessFields_Height_Create>;
    delete?: Maybe<IconsDocAccessFields_Height_Delete>;
    read?: Maybe<IconsDocAccessFields_Height_Read>;
    update?: Maybe<IconsDocAccessFields_Height_Update>;
};

export type IconsDocAccessFields_Height_Create = {
    __typename?: 'IconsDocAccessFields_height_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Height_Delete = {
    __typename?: 'IconsDocAccessFields_height_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Height_Read = {
    __typename?: 'IconsDocAccessFields_height_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Height_Update = {
    __typename?: 'IconsDocAccessFields_height_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_MimeType = {
    __typename?: 'IconsDocAccessFields_mimeType';
    create?: Maybe<IconsDocAccessFields_MimeType_Create>;
    delete?: Maybe<IconsDocAccessFields_MimeType_Delete>;
    read?: Maybe<IconsDocAccessFields_MimeType_Read>;
    update?: Maybe<IconsDocAccessFields_MimeType_Update>;
};

export type IconsDocAccessFields_MimeType_Create = {
    __typename?: 'IconsDocAccessFields_mimeType_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_MimeType_Delete = {
    __typename?: 'IconsDocAccessFields_mimeType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_MimeType_Read = {
    __typename?: 'IconsDocAccessFields_mimeType_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_MimeType_Update = {
    __typename?: 'IconsDocAccessFields_mimeType_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes = {
    __typename?: 'IconsDocAccessFields_sizes';
    create?: Maybe<IconsDocAccessFields_Sizes_Create>;
    delete?: Maybe<IconsDocAccessFields_Sizes_Delete>;
    fields?: Maybe<IconsDocAccessFields_Sizes_Fields>;
    read?: Maybe<IconsDocAccessFields_Sizes_Read>;
    update?: Maybe<IconsDocAccessFields_Sizes_Update>;
};

export type IconsDocAccessFields_Sizes_Create = {
    __typename?: 'IconsDocAccessFields_sizes_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Delete = {
    __typename?: 'IconsDocAccessFields_sizes_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Fields = {
    __typename?: 'IconsDocAccessFields_sizes_Fields';
    thumbnail?: Maybe<IconsDocAccessFields_Sizes_Thumbnail>;
};

export type IconsDocAccessFields_Sizes_Read = {
    __typename?: 'IconsDocAccessFields_sizes_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Update = {
    __typename?: 'IconsDocAccessFields_sizes_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail';
    create?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Create>;
    delete?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Delete>;
    fields?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Fields>;
    read?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Read>;
    update?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Update>;
};

export type IconsDocAccessFields_Sizes_Thumbnail_Create = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Delete = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Fields = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_Fields';
    filename?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Filename>;
    filesize?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Filesize>;
    height?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Height>;
    mimeType?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_MimeType>;
    url?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Url>;
    width?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Width>;
};

export type IconsDocAccessFields_Sizes_Thumbnail_Read = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Update = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Filename = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_filename';
    create?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Filename_Create>;
    delete?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Filename_Delete>;
    read?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Filename_Read>;
    update?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Filename_Update>;
};

export type IconsDocAccessFields_Sizes_Thumbnail_Filename_Create = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_filename_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Filename_Delete = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_filename_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Filename_Read = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_filename_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Filename_Update = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_filename_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Filesize = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_filesize';
    create?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Filesize_Create>;
    delete?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Filesize_Delete>;
    read?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Filesize_Read>;
    update?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Filesize_Update>;
};

export type IconsDocAccessFields_Sizes_Thumbnail_Filesize_Create = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_filesize_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Filesize_Delete = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_filesize_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Filesize_Read = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_filesize_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Filesize_Update = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_filesize_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Height = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_height';
    create?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Height_Create>;
    delete?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Height_Delete>;
    read?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Height_Read>;
    update?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Height_Update>;
};

export type IconsDocAccessFields_Sizes_Thumbnail_Height_Create = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_height_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Height_Delete = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_height_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Height_Read = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_height_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Height_Update = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_height_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_MimeType = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_mimeType';
    create?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_MimeType_Create>;
    delete?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_MimeType_Delete>;
    read?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_MimeType_Read>;
    update?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_MimeType_Update>;
};

export type IconsDocAccessFields_Sizes_Thumbnail_MimeType_Create = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_mimeType_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_MimeType_Delete = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_mimeType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_MimeType_Read = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_mimeType_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_MimeType_Update = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_mimeType_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Url = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_url';
    create?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Url_Create>;
    delete?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Url_Delete>;
    read?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Url_Read>;
    update?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Url_Update>;
};

export type IconsDocAccessFields_Sizes_Thumbnail_Url_Create = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_url_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Url_Delete = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_url_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Url_Read = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_url_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Url_Update = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_url_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Width = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_width';
    create?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Width_Create>;
    delete?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Width_Delete>;
    read?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Width_Read>;
    update?: Maybe<IconsDocAccessFields_Sizes_Thumbnail_Width_Update>;
};

export type IconsDocAccessFields_Sizes_Thumbnail_Width_Create = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_width_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Width_Delete = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_width_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Width_Read = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_width_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Sizes_Thumbnail_Width_Update = {
    __typename?: 'IconsDocAccessFields_sizes_thumbnail_width_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_UpdatedAt = {
    __typename?: 'IconsDocAccessFields_updatedAt';
    create?: Maybe<IconsDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<IconsDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<IconsDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<IconsDocAccessFields_UpdatedAt_Update>;
};

export type IconsDocAccessFields_UpdatedAt_Create = {
    __typename?: 'IconsDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'IconsDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_UpdatedAt_Read = {
    __typename?: 'IconsDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_UpdatedAt_Update = {
    __typename?: 'IconsDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Url = {
    __typename?: 'IconsDocAccessFields_url';
    create?: Maybe<IconsDocAccessFields_Url_Create>;
    delete?: Maybe<IconsDocAccessFields_Url_Delete>;
    read?: Maybe<IconsDocAccessFields_Url_Read>;
    update?: Maybe<IconsDocAccessFields_Url_Update>;
};

export type IconsDocAccessFields_Url_Create = {
    __typename?: 'IconsDocAccessFields_url_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Url_Delete = {
    __typename?: 'IconsDocAccessFields_url_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Url_Read = {
    __typename?: 'IconsDocAccessFields_url_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Url_Update = {
    __typename?: 'IconsDocAccessFields_url_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Width = {
    __typename?: 'IconsDocAccessFields_width';
    create?: Maybe<IconsDocAccessFields_Width_Create>;
    delete?: Maybe<IconsDocAccessFields_Width_Delete>;
    read?: Maybe<IconsDocAccessFields_Width_Read>;
    update?: Maybe<IconsDocAccessFields_Width_Update>;
};

export type IconsDocAccessFields_Width_Create = {
    __typename?: 'IconsDocAccessFields_width_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Width_Delete = {
    __typename?: 'IconsDocAccessFields_width_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Width_Read = {
    __typename?: 'IconsDocAccessFields_width_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Width_Update = {
    __typename?: 'IconsDocAccessFields_width_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields = {
    __typename?: 'IconsFields';
    alt?: Maybe<IconsFields_Alt>;
    createdAt?: Maybe<IconsFields_CreatedAt>;
    filename?: Maybe<IconsFields_Filename>;
    filesize?: Maybe<IconsFields_Filesize>;
    height?: Maybe<IconsFields_Height>;
    mimeType?: Maybe<IconsFields_MimeType>;
    sizes?: Maybe<IconsFields_Sizes>;
    updatedAt?: Maybe<IconsFields_UpdatedAt>;
    url?: Maybe<IconsFields_Url>;
    width?: Maybe<IconsFields_Width>;
};

export type IconsFields_Alt = {
    __typename?: 'IconsFields_alt';
    create?: Maybe<IconsFields_Alt_Create>;
    delete?: Maybe<IconsFields_Alt_Delete>;
    read?: Maybe<IconsFields_Alt_Read>;
    update?: Maybe<IconsFields_Alt_Update>;
};

export type IconsFields_Alt_Create = {
    __typename?: 'IconsFields_alt_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Alt_Delete = {
    __typename?: 'IconsFields_alt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Alt_Read = {
    __typename?: 'IconsFields_alt_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Alt_Update = {
    __typename?: 'IconsFields_alt_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_CreatedAt = {
    __typename?: 'IconsFields_createdAt';
    create?: Maybe<IconsFields_CreatedAt_Create>;
    delete?: Maybe<IconsFields_CreatedAt_Delete>;
    read?: Maybe<IconsFields_CreatedAt_Read>;
    update?: Maybe<IconsFields_CreatedAt_Update>;
};

export type IconsFields_CreatedAt_Create = {
    __typename?: 'IconsFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_CreatedAt_Delete = {
    __typename?: 'IconsFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_CreatedAt_Read = {
    __typename?: 'IconsFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_CreatedAt_Update = {
    __typename?: 'IconsFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Filename = {
    __typename?: 'IconsFields_filename';
    create?: Maybe<IconsFields_Filename_Create>;
    delete?: Maybe<IconsFields_Filename_Delete>;
    read?: Maybe<IconsFields_Filename_Read>;
    update?: Maybe<IconsFields_Filename_Update>;
};

export type IconsFields_Filename_Create = {
    __typename?: 'IconsFields_filename_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Filename_Delete = {
    __typename?: 'IconsFields_filename_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Filename_Read = {
    __typename?: 'IconsFields_filename_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Filename_Update = {
    __typename?: 'IconsFields_filename_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Filesize = {
    __typename?: 'IconsFields_filesize';
    create?: Maybe<IconsFields_Filesize_Create>;
    delete?: Maybe<IconsFields_Filesize_Delete>;
    read?: Maybe<IconsFields_Filesize_Read>;
    update?: Maybe<IconsFields_Filesize_Update>;
};

export type IconsFields_Filesize_Create = {
    __typename?: 'IconsFields_filesize_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Filesize_Delete = {
    __typename?: 'IconsFields_filesize_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Filesize_Read = {
    __typename?: 'IconsFields_filesize_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Filesize_Update = {
    __typename?: 'IconsFields_filesize_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Height = {
    __typename?: 'IconsFields_height';
    create?: Maybe<IconsFields_Height_Create>;
    delete?: Maybe<IconsFields_Height_Delete>;
    read?: Maybe<IconsFields_Height_Read>;
    update?: Maybe<IconsFields_Height_Update>;
};

export type IconsFields_Height_Create = {
    __typename?: 'IconsFields_height_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Height_Delete = {
    __typename?: 'IconsFields_height_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Height_Read = {
    __typename?: 'IconsFields_height_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Height_Update = {
    __typename?: 'IconsFields_height_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_MimeType = {
    __typename?: 'IconsFields_mimeType';
    create?: Maybe<IconsFields_MimeType_Create>;
    delete?: Maybe<IconsFields_MimeType_Delete>;
    read?: Maybe<IconsFields_MimeType_Read>;
    update?: Maybe<IconsFields_MimeType_Update>;
};

export type IconsFields_MimeType_Create = {
    __typename?: 'IconsFields_mimeType_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_MimeType_Delete = {
    __typename?: 'IconsFields_mimeType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_MimeType_Read = {
    __typename?: 'IconsFields_mimeType_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_MimeType_Update = {
    __typename?: 'IconsFields_mimeType_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes = {
    __typename?: 'IconsFields_sizes';
    create?: Maybe<IconsFields_Sizes_Create>;
    delete?: Maybe<IconsFields_Sizes_Delete>;
    fields?: Maybe<IconsFields_Sizes_Fields>;
    read?: Maybe<IconsFields_Sizes_Read>;
    update?: Maybe<IconsFields_Sizes_Update>;
};

export type IconsFields_Sizes_Create = {
    __typename?: 'IconsFields_sizes_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Delete = {
    __typename?: 'IconsFields_sizes_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Fields = {
    __typename?: 'IconsFields_sizes_Fields';
    thumbnail?: Maybe<IconsFields_Sizes_Thumbnail>;
};

export type IconsFields_Sizes_Read = {
    __typename?: 'IconsFields_sizes_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Update = {
    __typename?: 'IconsFields_sizes_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail = {
    __typename?: 'IconsFields_sizes_thumbnail';
    create?: Maybe<IconsFields_Sizes_Thumbnail_Create>;
    delete?: Maybe<IconsFields_Sizes_Thumbnail_Delete>;
    fields?: Maybe<IconsFields_Sizes_Thumbnail_Fields>;
    read?: Maybe<IconsFields_Sizes_Thumbnail_Read>;
    update?: Maybe<IconsFields_Sizes_Thumbnail_Update>;
};

export type IconsFields_Sizes_Thumbnail_Create = {
    __typename?: 'IconsFields_sizes_thumbnail_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Delete = {
    __typename?: 'IconsFields_sizes_thumbnail_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Fields = {
    __typename?: 'IconsFields_sizes_thumbnail_Fields';
    filename?: Maybe<IconsFields_Sizes_Thumbnail_Filename>;
    filesize?: Maybe<IconsFields_Sizes_Thumbnail_Filesize>;
    height?: Maybe<IconsFields_Sizes_Thumbnail_Height>;
    mimeType?: Maybe<IconsFields_Sizes_Thumbnail_MimeType>;
    url?: Maybe<IconsFields_Sizes_Thumbnail_Url>;
    width?: Maybe<IconsFields_Sizes_Thumbnail_Width>;
};

export type IconsFields_Sizes_Thumbnail_Read = {
    __typename?: 'IconsFields_sizes_thumbnail_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Update = {
    __typename?: 'IconsFields_sizes_thumbnail_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Filename = {
    __typename?: 'IconsFields_sizes_thumbnail_filename';
    create?: Maybe<IconsFields_Sizes_Thumbnail_Filename_Create>;
    delete?: Maybe<IconsFields_Sizes_Thumbnail_Filename_Delete>;
    read?: Maybe<IconsFields_Sizes_Thumbnail_Filename_Read>;
    update?: Maybe<IconsFields_Sizes_Thumbnail_Filename_Update>;
};

export type IconsFields_Sizes_Thumbnail_Filename_Create = {
    __typename?: 'IconsFields_sizes_thumbnail_filename_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Filename_Delete = {
    __typename?: 'IconsFields_sizes_thumbnail_filename_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Filename_Read = {
    __typename?: 'IconsFields_sizes_thumbnail_filename_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Filename_Update = {
    __typename?: 'IconsFields_sizes_thumbnail_filename_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Filesize = {
    __typename?: 'IconsFields_sizes_thumbnail_filesize';
    create?: Maybe<IconsFields_Sizes_Thumbnail_Filesize_Create>;
    delete?: Maybe<IconsFields_Sizes_Thumbnail_Filesize_Delete>;
    read?: Maybe<IconsFields_Sizes_Thumbnail_Filesize_Read>;
    update?: Maybe<IconsFields_Sizes_Thumbnail_Filesize_Update>;
};

export type IconsFields_Sizes_Thumbnail_Filesize_Create = {
    __typename?: 'IconsFields_sizes_thumbnail_filesize_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Filesize_Delete = {
    __typename?: 'IconsFields_sizes_thumbnail_filesize_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Filesize_Read = {
    __typename?: 'IconsFields_sizes_thumbnail_filesize_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Filesize_Update = {
    __typename?: 'IconsFields_sizes_thumbnail_filesize_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Height = {
    __typename?: 'IconsFields_sizes_thumbnail_height';
    create?: Maybe<IconsFields_Sizes_Thumbnail_Height_Create>;
    delete?: Maybe<IconsFields_Sizes_Thumbnail_Height_Delete>;
    read?: Maybe<IconsFields_Sizes_Thumbnail_Height_Read>;
    update?: Maybe<IconsFields_Sizes_Thumbnail_Height_Update>;
};

export type IconsFields_Sizes_Thumbnail_Height_Create = {
    __typename?: 'IconsFields_sizes_thumbnail_height_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Height_Delete = {
    __typename?: 'IconsFields_sizes_thumbnail_height_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Height_Read = {
    __typename?: 'IconsFields_sizes_thumbnail_height_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Height_Update = {
    __typename?: 'IconsFields_sizes_thumbnail_height_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_MimeType = {
    __typename?: 'IconsFields_sizes_thumbnail_mimeType';
    create?: Maybe<IconsFields_Sizes_Thumbnail_MimeType_Create>;
    delete?: Maybe<IconsFields_Sizes_Thumbnail_MimeType_Delete>;
    read?: Maybe<IconsFields_Sizes_Thumbnail_MimeType_Read>;
    update?: Maybe<IconsFields_Sizes_Thumbnail_MimeType_Update>;
};

export type IconsFields_Sizes_Thumbnail_MimeType_Create = {
    __typename?: 'IconsFields_sizes_thumbnail_mimeType_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_MimeType_Delete = {
    __typename?: 'IconsFields_sizes_thumbnail_mimeType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_MimeType_Read = {
    __typename?: 'IconsFields_sizes_thumbnail_mimeType_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_MimeType_Update = {
    __typename?: 'IconsFields_sizes_thumbnail_mimeType_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Url = {
    __typename?: 'IconsFields_sizes_thumbnail_url';
    create?: Maybe<IconsFields_Sizes_Thumbnail_Url_Create>;
    delete?: Maybe<IconsFields_Sizes_Thumbnail_Url_Delete>;
    read?: Maybe<IconsFields_Sizes_Thumbnail_Url_Read>;
    update?: Maybe<IconsFields_Sizes_Thumbnail_Url_Update>;
};

export type IconsFields_Sizes_Thumbnail_Url_Create = {
    __typename?: 'IconsFields_sizes_thumbnail_url_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Url_Delete = {
    __typename?: 'IconsFields_sizes_thumbnail_url_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Url_Read = {
    __typename?: 'IconsFields_sizes_thumbnail_url_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Url_Update = {
    __typename?: 'IconsFields_sizes_thumbnail_url_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Width = {
    __typename?: 'IconsFields_sizes_thumbnail_width';
    create?: Maybe<IconsFields_Sizes_Thumbnail_Width_Create>;
    delete?: Maybe<IconsFields_Sizes_Thumbnail_Width_Delete>;
    read?: Maybe<IconsFields_Sizes_Thumbnail_Width_Read>;
    update?: Maybe<IconsFields_Sizes_Thumbnail_Width_Update>;
};

export type IconsFields_Sizes_Thumbnail_Width_Create = {
    __typename?: 'IconsFields_sizes_thumbnail_width_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Width_Delete = {
    __typename?: 'IconsFields_sizes_thumbnail_width_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Width_Read = {
    __typename?: 'IconsFields_sizes_thumbnail_width_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Sizes_Thumbnail_Width_Update = {
    __typename?: 'IconsFields_sizes_thumbnail_width_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_UpdatedAt = {
    __typename?: 'IconsFields_updatedAt';
    create?: Maybe<IconsFields_UpdatedAt_Create>;
    delete?: Maybe<IconsFields_UpdatedAt_Delete>;
    read?: Maybe<IconsFields_UpdatedAt_Read>;
    update?: Maybe<IconsFields_UpdatedAt_Update>;
};

export type IconsFields_UpdatedAt_Create = {
    __typename?: 'IconsFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_UpdatedAt_Delete = {
    __typename?: 'IconsFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_UpdatedAt_Read = {
    __typename?: 'IconsFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_UpdatedAt_Update = {
    __typename?: 'IconsFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Url = {
    __typename?: 'IconsFields_url';
    create?: Maybe<IconsFields_Url_Create>;
    delete?: Maybe<IconsFields_Url_Delete>;
    read?: Maybe<IconsFields_Url_Read>;
    update?: Maybe<IconsFields_Url_Update>;
};

export type IconsFields_Url_Create = {
    __typename?: 'IconsFields_url_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Url_Delete = {
    __typename?: 'IconsFields_url_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Url_Read = {
    __typename?: 'IconsFields_url_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Url_Update = {
    __typename?: 'IconsFields_url_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Width = {
    __typename?: 'IconsFields_width';
    create?: Maybe<IconsFields_Width_Create>;
    delete?: Maybe<IconsFields_Width_Delete>;
    read?: Maybe<IconsFields_Width_Read>;
    update?: Maybe<IconsFields_Width_Update>;
};

export type IconsFields_Width_Create = {
    __typename?: 'IconsFields_width_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Width_Delete = {
    __typename?: 'IconsFields_width_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Width_Read = {
    __typename?: 'IconsFields_width_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Width_Update = {
    __typename?: 'IconsFields_width_Update';
    permission: Scalars['Boolean']['output'];
};

export type IconsReadAccess = {
    __typename?: 'IconsReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type IconsReadDocAccess = {
    __typename?: 'IconsReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type IconsUpdateAccess = {
    __typename?: 'IconsUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type IconsUpdateDocAccess = {
    __typename?: 'IconsUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Image = {
    __typename?: 'Image';
    alt: Scalars['String']['output'];
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    filename?: Maybe<Scalars['String']['output']>;
    filesize?: Maybe<Scalars['Float']['output']>;
    height?: Maybe<Scalars['Float']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    mimeType?: Maybe<Scalars['String']['output']>;
    sizes?: Maybe<Image_Sizes>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
    url?: Maybe<Scalars['String']['output']>;
    width?: Maybe<Scalars['Float']['output']>;
};

export type Image_Sizes = {
    __typename?: 'Image_Sizes';
    thumbnail?: Maybe<Image_Sizes_Thumbnail>;
};

export type Image_Sizes_Thumbnail = {
    __typename?: 'Image_Sizes_Thumbnail';
    filename?: Maybe<Scalars['String']['output']>;
    filesize?: Maybe<Scalars['Float']['output']>;
    height?: Maybe<Scalars['Float']['output']>;
    mimeType?: Maybe<Scalars['String']['output']>;
    url?: Maybe<Scalars['String']['output']>;
    width?: Maybe<Scalars['Float']['output']>;
};

export type Image_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Image_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Image_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Image_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Image_Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Image_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Image_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Image_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Image_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Image_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Image_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Image_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Image_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Image_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Image_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Image_Where = {
    AND?: InputMaybe<Array<InputMaybe<Image_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<Image_Where_Or>>>;
    alt?: InputMaybe<Image_Alt_Operator>;
    createdAt?: InputMaybe<Image_CreatedAt_Operator>;
    filename?: InputMaybe<Image_Filename_Operator>;
    filesize?: InputMaybe<Image_Filesize_Operator>;
    height?: InputMaybe<Image_Height_Operator>;
    id?: InputMaybe<Image_Id_Operator>;
    mimeType?: InputMaybe<Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Image_UpdatedAt_Operator>;
    url?: InputMaybe<Image_Url_Operator>;
    width?: InputMaybe<Image_Width_Operator>;
};

export type Image_Where_And = {
    alt?: InputMaybe<Image_Alt_Operator>;
    createdAt?: InputMaybe<Image_CreatedAt_Operator>;
    filename?: InputMaybe<Image_Filename_Operator>;
    filesize?: InputMaybe<Image_Filesize_Operator>;
    height?: InputMaybe<Image_Height_Operator>;
    id?: InputMaybe<Image_Id_Operator>;
    mimeType?: InputMaybe<Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Image_UpdatedAt_Operator>;
    url?: InputMaybe<Image_Url_Operator>;
    width?: InputMaybe<Image_Width_Operator>;
};

export type Image_Where_Or = {
    alt?: InputMaybe<Image_Alt_Operator>;
    createdAt?: InputMaybe<Image_CreatedAt_Operator>;
    filename?: InputMaybe<Image_Filename_Operator>;
    filesize?: InputMaybe<Image_Filesize_Operator>;
    height?: InputMaybe<Image_Height_Operator>;
    id?: InputMaybe<Image_Id_Operator>;
    mimeType?: InputMaybe<Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Image_UpdatedAt_Operator>;
    url?: InputMaybe<Image_Url_Operator>;
    width?: InputMaybe<Image_Width_Operator>;
};

export type Image_Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Images = {
    __typename?: 'Images';
    docs?: Maybe<Array<Maybe<Image>>>;
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
    hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
    limit?: Maybe<Scalars['Int']['output']>;
    nextPage?: Maybe<Scalars['Int']['output']>;
    offset?: Maybe<Scalars['Int']['output']>;
    page?: Maybe<Scalars['Int']['output']>;
    pagingCounter?: Maybe<Scalars['Int']['output']>;
    prevPage?: Maybe<Scalars['Int']['output']>;
    totalDocs?: Maybe<Scalars['Int']['output']>;
    totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ImagesCreateAccess = {
    __typename?: 'ImagesCreateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ImagesCreateDocAccess = {
    __typename?: 'ImagesCreateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ImagesDeleteAccess = {
    __typename?: 'ImagesDeleteAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ImagesDeleteDocAccess = {
    __typename?: 'ImagesDeleteDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ImagesDocAccessFields = {
    __typename?: 'ImagesDocAccessFields';
    alt?: Maybe<ImagesDocAccessFields_Alt>;
    createdAt?: Maybe<ImagesDocAccessFields_CreatedAt>;
    filename?: Maybe<ImagesDocAccessFields_Filename>;
    filesize?: Maybe<ImagesDocAccessFields_Filesize>;
    height?: Maybe<ImagesDocAccessFields_Height>;
    mimeType?: Maybe<ImagesDocAccessFields_MimeType>;
    sizes?: Maybe<ImagesDocAccessFields_Sizes>;
    updatedAt?: Maybe<ImagesDocAccessFields_UpdatedAt>;
    url?: Maybe<ImagesDocAccessFields_Url>;
    width?: Maybe<ImagesDocAccessFields_Width>;
};

export type ImagesDocAccessFields_Alt = {
    __typename?: 'ImagesDocAccessFields_alt';
    create?: Maybe<ImagesDocAccessFields_Alt_Create>;
    delete?: Maybe<ImagesDocAccessFields_Alt_Delete>;
    read?: Maybe<ImagesDocAccessFields_Alt_Read>;
    update?: Maybe<ImagesDocAccessFields_Alt_Update>;
};

export type ImagesDocAccessFields_Alt_Create = {
    __typename?: 'ImagesDocAccessFields_alt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Alt_Delete = {
    __typename?: 'ImagesDocAccessFields_alt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Alt_Read = {
    __typename?: 'ImagesDocAccessFields_alt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Alt_Update = {
    __typename?: 'ImagesDocAccessFields_alt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_CreatedAt = {
    __typename?: 'ImagesDocAccessFields_createdAt';
    create?: Maybe<ImagesDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<ImagesDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<ImagesDocAccessFields_CreatedAt_Read>;
    update?: Maybe<ImagesDocAccessFields_CreatedAt_Update>;
};

export type ImagesDocAccessFields_CreatedAt_Create = {
    __typename?: 'ImagesDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_CreatedAt_Delete = {
    __typename?: 'ImagesDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_CreatedAt_Read = {
    __typename?: 'ImagesDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_CreatedAt_Update = {
    __typename?: 'ImagesDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Filename = {
    __typename?: 'ImagesDocAccessFields_filename';
    create?: Maybe<ImagesDocAccessFields_Filename_Create>;
    delete?: Maybe<ImagesDocAccessFields_Filename_Delete>;
    read?: Maybe<ImagesDocAccessFields_Filename_Read>;
    update?: Maybe<ImagesDocAccessFields_Filename_Update>;
};

export type ImagesDocAccessFields_Filename_Create = {
    __typename?: 'ImagesDocAccessFields_filename_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Filename_Delete = {
    __typename?: 'ImagesDocAccessFields_filename_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Filename_Read = {
    __typename?: 'ImagesDocAccessFields_filename_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Filename_Update = {
    __typename?: 'ImagesDocAccessFields_filename_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Filesize = {
    __typename?: 'ImagesDocAccessFields_filesize';
    create?: Maybe<ImagesDocAccessFields_Filesize_Create>;
    delete?: Maybe<ImagesDocAccessFields_Filesize_Delete>;
    read?: Maybe<ImagesDocAccessFields_Filesize_Read>;
    update?: Maybe<ImagesDocAccessFields_Filesize_Update>;
};

export type ImagesDocAccessFields_Filesize_Create = {
    __typename?: 'ImagesDocAccessFields_filesize_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Filesize_Delete = {
    __typename?: 'ImagesDocAccessFields_filesize_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Filesize_Read = {
    __typename?: 'ImagesDocAccessFields_filesize_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Filesize_Update = {
    __typename?: 'ImagesDocAccessFields_filesize_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Height = {
    __typename?: 'ImagesDocAccessFields_height';
    create?: Maybe<ImagesDocAccessFields_Height_Create>;
    delete?: Maybe<ImagesDocAccessFields_Height_Delete>;
    read?: Maybe<ImagesDocAccessFields_Height_Read>;
    update?: Maybe<ImagesDocAccessFields_Height_Update>;
};

export type ImagesDocAccessFields_Height_Create = {
    __typename?: 'ImagesDocAccessFields_height_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Height_Delete = {
    __typename?: 'ImagesDocAccessFields_height_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Height_Read = {
    __typename?: 'ImagesDocAccessFields_height_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Height_Update = {
    __typename?: 'ImagesDocAccessFields_height_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_MimeType = {
    __typename?: 'ImagesDocAccessFields_mimeType';
    create?: Maybe<ImagesDocAccessFields_MimeType_Create>;
    delete?: Maybe<ImagesDocAccessFields_MimeType_Delete>;
    read?: Maybe<ImagesDocAccessFields_MimeType_Read>;
    update?: Maybe<ImagesDocAccessFields_MimeType_Update>;
};

export type ImagesDocAccessFields_MimeType_Create = {
    __typename?: 'ImagesDocAccessFields_mimeType_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_MimeType_Delete = {
    __typename?: 'ImagesDocAccessFields_mimeType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_MimeType_Read = {
    __typename?: 'ImagesDocAccessFields_mimeType_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_MimeType_Update = {
    __typename?: 'ImagesDocAccessFields_mimeType_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes = {
    __typename?: 'ImagesDocAccessFields_sizes';
    create?: Maybe<ImagesDocAccessFields_Sizes_Create>;
    delete?: Maybe<ImagesDocAccessFields_Sizes_Delete>;
    fields?: Maybe<ImagesDocAccessFields_Sizes_Fields>;
    read?: Maybe<ImagesDocAccessFields_Sizes_Read>;
    update?: Maybe<ImagesDocAccessFields_Sizes_Update>;
};

export type ImagesDocAccessFields_Sizes_Create = {
    __typename?: 'ImagesDocAccessFields_sizes_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Delete = {
    __typename?: 'ImagesDocAccessFields_sizes_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Fields = {
    __typename?: 'ImagesDocAccessFields_sizes_Fields';
    thumbnail?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail>;
};

export type ImagesDocAccessFields_Sizes_Read = {
    __typename?: 'ImagesDocAccessFields_sizes_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Update = {
    __typename?: 'ImagesDocAccessFields_sizes_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail';
    create?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Create>;
    delete?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Delete>;
    fields?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Fields>;
    read?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Read>;
    update?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Update>;
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Create = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Delete = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Fields = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_Fields';
    filename?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Filename>;
    filesize?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Filesize>;
    height?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Height>;
    mimeType?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_MimeType>;
    url?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Url>;
    width?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Width>;
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Read = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Update = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Filename = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_filename';
    create?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Filename_Create>;
    delete?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Filename_Delete>;
    read?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Filename_Read>;
    update?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Filename_Update>;
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Filename_Create = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_filename_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Filename_Delete = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_filename_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Filename_Read = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_filename_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Filename_Update = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_filename_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Filesize = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_filesize';
    create?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Filesize_Create>;
    delete?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Filesize_Delete>;
    read?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Filesize_Read>;
    update?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Filesize_Update>;
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Filesize_Create = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_filesize_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Filesize_Delete = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_filesize_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Filesize_Read = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_filesize_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Filesize_Update = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_filesize_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Height = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_height';
    create?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Height_Create>;
    delete?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Height_Delete>;
    read?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Height_Read>;
    update?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Height_Update>;
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Height_Create = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_height_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Height_Delete = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_height_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Height_Read = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_height_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Height_Update = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_height_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_MimeType = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_mimeType';
    create?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_MimeType_Create>;
    delete?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_MimeType_Delete>;
    read?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_MimeType_Read>;
    update?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_MimeType_Update>;
};

export type ImagesDocAccessFields_Sizes_Thumbnail_MimeType_Create = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_mimeType_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_MimeType_Delete = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_mimeType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_MimeType_Read = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_mimeType_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_MimeType_Update = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_mimeType_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Url = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_url';
    create?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Url_Create>;
    delete?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Url_Delete>;
    read?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Url_Read>;
    update?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Url_Update>;
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Url_Create = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_url_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Url_Delete = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_url_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Url_Read = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_url_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Url_Update = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_url_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Width = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_width';
    create?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Width_Create>;
    delete?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Width_Delete>;
    read?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Width_Read>;
    update?: Maybe<ImagesDocAccessFields_Sizes_Thumbnail_Width_Update>;
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Width_Create = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_width_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Width_Delete = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_width_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Width_Read = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_width_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Sizes_Thumbnail_Width_Update = {
    __typename?: 'ImagesDocAccessFields_sizes_thumbnail_width_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_UpdatedAt = {
    __typename?: 'ImagesDocAccessFields_updatedAt';
    create?: Maybe<ImagesDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<ImagesDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<ImagesDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<ImagesDocAccessFields_UpdatedAt_Update>;
};

export type ImagesDocAccessFields_UpdatedAt_Create = {
    __typename?: 'ImagesDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'ImagesDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_UpdatedAt_Read = {
    __typename?: 'ImagesDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_UpdatedAt_Update = {
    __typename?: 'ImagesDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Url = {
    __typename?: 'ImagesDocAccessFields_url';
    create?: Maybe<ImagesDocAccessFields_Url_Create>;
    delete?: Maybe<ImagesDocAccessFields_Url_Delete>;
    read?: Maybe<ImagesDocAccessFields_Url_Read>;
    update?: Maybe<ImagesDocAccessFields_Url_Update>;
};

export type ImagesDocAccessFields_Url_Create = {
    __typename?: 'ImagesDocAccessFields_url_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Url_Delete = {
    __typename?: 'ImagesDocAccessFields_url_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Url_Read = {
    __typename?: 'ImagesDocAccessFields_url_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Url_Update = {
    __typename?: 'ImagesDocAccessFields_url_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Width = {
    __typename?: 'ImagesDocAccessFields_width';
    create?: Maybe<ImagesDocAccessFields_Width_Create>;
    delete?: Maybe<ImagesDocAccessFields_Width_Delete>;
    read?: Maybe<ImagesDocAccessFields_Width_Read>;
    update?: Maybe<ImagesDocAccessFields_Width_Update>;
};

export type ImagesDocAccessFields_Width_Create = {
    __typename?: 'ImagesDocAccessFields_width_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Width_Delete = {
    __typename?: 'ImagesDocAccessFields_width_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Width_Read = {
    __typename?: 'ImagesDocAccessFields_width_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Width_Update = {
    __typename?: 'ImagesDocAccessFields_width_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields = {
    __typename?: 'ImagesFields';
    alt?: Maybe<ImagesFields_Alt>;
    createdAt?: Maybe<ImagesFields_CreatedAt>;
    filename?: Maybe<ImagesFields_Filename>;
    filesize?: Maybe<ImagesFields_Filesize>;
    height?: Maybe<ImagesFields_Height>;
    mimeType?: Maybe<ImagesFields_MimeType>;
    sizes?: Maybe<ImagesFields_Sizes>;
    updatedAt?: Maybe<ImagesFields_UpdatedAt>;
    url?: Maybe<ImagesFields_Url>;
    width?: Maybe<ImagesFields_Width>;
};

export type ImagesFields_Alt = {
    __typename?: 'ImagesFields_alt';
    create?: Maybe<ImagesFields_Alt_Create>;
    delete?: Maybe<ImagesFields_Alt_Delete>;
    read?: Maybe<ImagesFields_Alt_Read>;
    update?: Maybe<ImagesFields_Alt_Update>;
};

export type ImagesFields_Alt_Create = {
    __typename?: 'ImagesFields_alt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Alt_Delete = {
    __typename?: 'ImagesFields_alt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Alt_Read = {
    __typename?: 'ImagesFields_alt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Alt_Update = {
    __typename?: 'ImagesFields_alt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_CreatedAt = {
    __typename?: 'ImagesFields_createdAt';
    create?: Maybe<ImagesFields_CreatedAt_Create>;
    delete?: Maybe<ImagesFields_CreatedAt_Delete>;
    read?: Maybe<ImagesFields_CreatedAt_Read>;
    update?: Maybe<ImagesFields_CreatedAt_Update>;
};

export type ImagesFields_CreatedAt_Create = {
    __typename?: 'ImagesFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_CreatedAt_Delete = {
    __typename?: 'ImagesFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_CreatedAt_Read = {
    __typename?: 'ImagesFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_CreatedAt_Update = {
    __typename?: 'ImagesFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Filename = {
    __typename?: 'ImagesFields_filename';
    create?: Maybe<ImagesFields_Filename_Create>;
    delete?: Maybe<ImagesFields_Filename_Delete>;
    read?: Maybe<ImagesFields_Filename_Read>;
    update?: Maybe<ImagesFields_Filename_Update>;
};

export type ImagesFields_Filename_Create = {
    __typename?: 'ImagesFields_filename_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Filename_Delete = {
    __typename?: 'ImagesFields_filename_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Filename_Read = {
    __typename?: 'ImagesFields_filename_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Filename_Update = {
    __typename?: 'ImagesFields_filename_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Filesize = {
    __typename?: 'ImagesFields_filesize';
    create?: Maybe<ImagesFields_Filesize_Create>;
    delete?: Maybe<ImagesFields_Filesize_Delete>;
    read?: Maybe<ImagesFields_Filesize_Read>;
    update?: Maybe<ImagesFields_Filesize_Update>;
};

export type ImagesFields_Filesize_Create = {
    __typename?: 'ImagesFields_filesize_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Filesize_Delete = {
    __typename?: 'ImagesFields_filesize_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Filesize_Read = {
    __typename?: 'ImagesFields_filesize_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Filesize_Update = {
    __typename?: 'ImagesFields_filesize_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Height = {
    __typename?: 'ImagesFields_height';
    create?: Maybe<ImagesFields_Height_Create>;
    delete?: Maybe<ImagesFields_Height_Delete>;
    read?: Maybe<ImagesFields_Height_Read>;
    update?: Maybe<ImagesFields_Height_Update>;
};

export type ImagesFields_Height_Create = {
    __typename?: 'ImagesFields_height_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Height_Delete = {
    __typename?: 'ImagesFields_height_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Height_Read = {
    __typename?: 'ImagesFields_height_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Height_Update = {
    __typename?: 'ImagesFields_height_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_MimeType = {
    __typename?: 'ImagesFields_mimeType';
    create?: Maybe<ImagesFields_MimeType_Create>;
    delete?: Maybe<ImagesFields_MimeType_Delete>;
    read?: Maybe<ImagesFields_MimeType_Read>;
    update?: Maybe<ImagesFields_MimeType_Update>;
};

export type ImagesFields_MimeType_Create = {
    __typename?: 'ImagesFields_mimeType_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_MimeType_Delete = {
    __typename?: 'ImagesFields_mimeType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_MimeType_Read = {
    __typename?: 'ImagesFields_mimeType_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_MimeType_Update = {
    __typename?: 'ImagesFields_mimeType_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes = {
    __typename?: 'ImagesFields_sizes';
    create?: Maybe<ImagesFields_Sizes_Create>;
    delete?: Maybe<ImagesFields_Sizes_Delete>;
    fields?: Maybe<ImagesFields_Sizes_Fields>;
    read?: Maybe<ImagesFields_Sizes_Read>;
    update?: Maybe<ImagesFields_Sizes_Update>;
};

export type ImagesFields_Sizes_Create = {
    __typename?: 'ImagesFields_sizes_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Delete = {
    __typename?: 'ImagesFields_sizes_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Fields = {
    __typename?: 'ImagesFields_sizes_Fields';
    thumbnail?: Maybe<ImagesFields_Sizes_Thumbnail>;
};

export type ImagesFields_Sizes_Read = {
    __typename?: 'ImagesFields_sizes_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Update = {
    __typename?: 'ImagesFields_sizes_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail = {
    __typename?: 'ImagesFields_sizes_thumbnail';
    create?: Maybe<ImagesFields_Sizes_Thumbnail_Create>;
    delete?: Maybe<ImagesFields_Sizes_Thumbnail_Delete>;
    fields?: Maybe<ImagesFields_Sizes_Thumbnail_Fields>;
    read?: Maybe<ImagesFields_Sizes_Thumbnail_Read>;
    update?: Maybe<ImagesFields_Sizes_Thumbnail_Update>;
};

export type ImagesFields_Sizes_Thumbnail_Create = {
    __typename?: 'ImagesFields_sizes_thumbnail_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Delete = {
    __typename?: 'ImagesFields_sizes_thumbnail_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Fields = {
    __typename?: 'ImagesFields_sizes_thumbnail_Fields';
    filename?: Maybe<ImagesFields_Sizes_Thumbnail_Filename>;
    filesize?: Maybe<ImagesFields_Sizes_Thumbnail_Filesize>;
    height?: Maybe<ImagesFields_Sizes_Thumbnail_Height>;
    mimeType?: Maybe<ImagesFields_Sizes_Thumbnail_MimeType>;
    url?: Maybe<ImagesFields_Sizes_Thumbnail_Url>;
    width?: Maybe<ImagesFields_Sizes_Thumbnail_Width>;
};

export type ImagesFields_Sizes_Thumbnail_Read = {
    __typename?: 'ImagesFields_sizes_thumbnail_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Update = {
    __typename?: 'ImagesFields_sizes_thumbnail_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Filename = {
    __typename?: 'ImagesFields_sizes_thumbnail_filename';
    create?: Maybe<ImagesFields_Sizes_Thumbnail_Filename_Create>;
    delete?: Maybe<ImagesFields_Sizes_Thumbnail_Filename_Delete>;
    read?: Maybe<ImagesFields_Sizes_Thumbnail_Filename_Read>;
    update?: Maybe<ImagesFields_Sizes_Thumbnail_Filename_Update>;
};

export type ImagesFields_Sizes_Thumbnail_Filename_Create = {
    __typename?: 'ImagesFields_sizes_thumbnail_filename_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Filename_Delete = {
    __typename?: 'ImagesFields_sizes_thumbnail_filename_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Filename_Read = {
    __typename?: 'ImagesFields_sizes_thumbnail_filename_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Filename_Update = {
    __typename?: 'ImagesFields_sizes_thumbnail_filename_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Filesize = {
    __typename?: 'ImagesFields_sizes_thumbnail_filesize';
    create?: Maybe<ImagesFields_Sizes_Thumbnail_Filesize_Create>;
    delete?: Maybe<ImagesFields_Sizes_Thumbnail_Filesize_Delete>;
    read?: Maybe<ImagesFields_Sizes_Thumbnail_Filesize_Read>;
    update?: Maybe<ImagesFields_Sizes_Thumbnail_Filesize_Update>;
};

export type ImagesFields_Sizes_Thumbnail_Filesize_Create = {
    __typename?: 'ImagesFields_sizes_thumbnail_filesize_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Filesize_Delete = {
    __typename?: 'ImagesFields_sizes_thumbnail_filesize_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Filesize_Read = {
    __typename?: 'ImagesFields_sizes_thumbnail_filesize_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Filesize_Update = {
    __typename?: 'ImagesFields_sizes_thumbnail_filesize_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Height = {
    __typename?: 'ImagesFields_sizes_thumbnail_height';
    create?: Maybe<ImagesFields_Sizes_Thumbnail_Height_Create>;
    delete?: Maybe<ImagesFields_Sizes_Thumbnail_Height_Delete>;
    read?: Maybe<ImagesFields_Sizes_Thumbnail_Height_Read>;
    update?: Maybe<ImagesFields_Sizes_Thumbnail_Height_Update>;
};

export type ImagesFields_Sizes_Thumbnail_Height_Create = {
    __typename?: 'ImagesFields_sizes_thumbnail_height_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Height_Delete = {
    __typename?: 'ImagesFields_sizes_thumbnail_height_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Height_Read = {
    __typename?: 'ImagesFields_sizes_thumbnail_height_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Height_Update = {
    __typename?: 'ImagesFields_sizes_thumbnail_height_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_MimeType = {
    __typename?: 'ImagesFields_sizes_thumbnail_mimeType';
    create?: Maybe<ImagesFields_Sizes_Thumbnail_MimeType_Create>;
    delete?: Maybe<ImagesFields_Sizes_Thumbnail_MimeType_Delete>;
    read?: Maybe<ImagesFields_Sizes_Thumbnail_MimeType_Read>;
    update?: Maybe<ImagesFields_Sizes_Thumbnail_MimeType_Update>;
};

export type ImagesFields_Sizes_Thumbnail_MimeType_Create = {
    __typename?: 'ImagesFields_sizes_thumbnail_mimeType_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_MimeType_Delete = {
    __typename?: 'ImagesFields_sizes_thumbnail_mimeType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_MimeType_Read = {
    __typename?: 'ImagesFields_sizes_thumbnail_mimeType_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_MimeType_Update = {
    __typename?: 'ImagesFields_sizes_thumbnail_mimeType_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Url = {
    __typename?: 'ImagesFields_sizes_thumbnail_url';
    create?: Maybe<ImagesFields_Sizes_Thumbnail_Url_Create>;
    delete?: Maybe<ImagesFields_Sizes_Thumbnail_Url_Delete>;
    read?: Maybe<ImagesFields_Sizes_Thumbnail_Url_Read>;
    update?: Maybe<ImagesFields_Sizes_Thumbnail_Url_Update>;
};

export type ImagesFields_Sizes_Thumbnail_Url_Create = {
    __typename?: 'ImagesFields_sizes_thumbnail_url_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Url_Delete = {
    __typename?: 'ImagesFields_sizes_thumbnail_url_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Url_Read = {
    __typename?: 'ImagesFields_sizes_thumbnail_url_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Url_Update = {
    __typename?: 'ImagesFields_sizes_thumbnail_url_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Width = {
    __typename?: 'ImagesFields_sizes_thumbnail_width';
    create?: Maybe<ImagesFields_Sizes_Thumbnail_Width_Create>;
    delete?: Maybe<ImagesFields_Sizes_Thumbnail_Width_Delete>;
    read?: Maybe<ImagesFields_Sizes_Thumbnail_Width_Read>;
    update?: Maybe<ImagesFields_Sizes_Thumbnail_Width_Update>;
};

export type ImagesFields_Sizes_Thumbnail_Width_Create = {
    __typename?: 'ImagesFields_sizes_thumbnail_width_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Width_Delete = {
    __typename?: 'ImagesFields_sizes_thumbnail_width_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Width_Read = {
    __typename?: 'ImagesFields_sizes_thumbnail_width_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Sizes_Thumbnail_Width_Update = {
    __typename?: 'ImagesFields_sizes_thumbnail_width_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_UpdatedAt = {
    __typename?: 'ImagesFields_updatedAt';
    create?: Maybe<ImagesFields_UpdatedAt_Create>;
    delete?: Maybe<ImagesFields_UpdatedAt_Delete>;
    read?: Maybe<ImagesFields_UpdatedAt_Read>;
    update?: Maybe<ImagesFields_UpdatedAt_Update>;
};

export type ImagesFields_UpdatedAt_Create = {
    __typename?: 'ImagesFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_UpdatedAt_Delete = {
    __typename?: 'ImagesFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_UpdatedAt_Read = {
    __typename?: 'ImagesFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_UpdatedAt_Update = {
    __typename?: 'ImagesFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Url = {
    __typename?: 'ImagesFields_url';
    create?: Maybe<ImagesFields_Url_Create>;
    delete?: Maybe<ImagesFields_Url_Delete>;
    read?: Maybe<ImagesFields_Url_Read>;
    update?: Maybe<ImagesFields_Url_Update>;
};

export type ImagesFields_Url_Create = {
    __typename?: 'ImagesFields_url_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Url_Delete = {
    __typename?: 'ImagesFields_url_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Url_Read = {
    __typename?: 'ImagesFields_url_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Url_Update = {
    __typename?: 'ImagesFields_url_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Width = {
    __typename?: 'ImagesFields_width';
    create?: Maybe<ImagesFields_Width_Create>;
    delete?: Maybe<ImagesFields_Width_Delete>;
    read?: Maybe<ImagesFields_Width_Read>;
    update?: Maybe<ImagesFields_Width_Update>;
};

export type ImagesFields_Width_Create = {
    __typename?: 'ImagesFields_width_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Width_Delete = {
    __typename?: 'ImagesFields_width_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Width_Read = {
    __typename?: 'ImagesFields_width_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Width_Update = {
    __typename?: 'ImagesFields_width_Update';
    permission: Scalars['Boolean']['output'];
};

export type ImagesReadAccess = {
    __typename?: 'ImagesReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ImagesReadDocAccess = {
    __typename?: 'ImagesReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ImagesUpdateAccess = {
    __typename?: 'ImagesUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ImagesUpdateDocAccess = {
    __typename?: 'ImagesUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Mutation = {
    __typename?: 'Mutation';
    createHero?: Maybe<Hero>;
    createIcon?: Maybe<Icon>;
    createImage?: Maybe<Image>;
    createPage?: Maybe<Page>;
    createProject?: Maybe<Project>;
    createTestimonial?: Maybe<Testimonial>;
    createTool?: Maybe<Tool>;
    createUser?: Maybe<User>;
    deleteHero?: Maybe<Hero>;
    deleteIcon?: Maybe<Icon>;
    deleteImage?: Maybe<Image>;
    deletePage?: Maybe<Page>;
    deletePreference?: Maybe<Preference>;
    deleteProject?: Maybe<Project>;
    deleteTestimonial?: Maybe<Testimonial>;
    deleteTool?: Maybe<Tool>;
    deleteUser?: Maybe<User>;
    forgotPasswordUser: Scalars['Boolean']['output'];
    loginUser?: Maybe<UsersLoginResult>;
    logoutUser?: Maybe<Scalars['String']['output']>;
    refreshTokenUser?: Maybe<UsersRefreshedUser>;
    resetPasswordUser?: Maybe<UsersResetPassword>;
    unlockUser: Scalars['Boolean']['output'];
    updateCaseStudyListing?: Maybe<CaseStudyListing>;
    updateHero?: Maybe<Hero>;
    updateIcon?: Maybe<Icon>;
    updateImage?: Maybe<Image>;
    updateNav?: Maybe<Nav>;
    updatePage?: Maybe<Page>;
    updatePreference?: Maybe<Preference>;
    updateProject?: Maybe<Project>;
    updateTestimonial?: Maybe<Testimonial>;
    updateTestimonialListing?: Maybe<TestimonialListing>;
    updateTool?: Maybe<Tool>;
    updateToolboxListing?: Maybe<ToolboxListing>;
    updateUser?: Maybe<User>;
    verifyEmailUser?: Maybe<Scalars['Boolean']['output']>;
};

export type MutationCreateHeroArgs = {
    data: MutationHeroInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreateIconArgs = {
    data: MutationIconInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreateImageArgs = {
    data: MutationImageInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreatePageArgs = {
    data: MutationPageInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreateProjectArgs = {
    data: MutationProjectInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreateTestimonialArgs = {
    data: MutationTestimonialInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreateToolArgs = {
    data: MutationToolInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreateUserArgs = {
    data: MutationUserInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationDeleteHeroArgs = {
    id: Scalars['String']['input'];
};

export type MutationDeleteIconArgs = {
    id: Scalars['String']['input'];
};

export type MutationDeleteImageArgs = {
    id: Scalars['String']['input'];
};

export type MutationDeletePageArgs = {
    id: Scalars['String']['input'];
};

export type MutationDeletePreferenceArgs = {
    key: Scalars['String']['input'];
};

export type MutationDeleteProjectArgs = {
    id: Scalars['String']['input'];
};

export type MutationDeleteTestimonialArgs = {
    id: Scalars['String']['input'];
};

export type MutationDeleteToolArgs = {
    id: Scalars['String']['input'];
};

export type MutationDeleteUserArgs = {
    id: Scalars['String']['input'];
};

export type MutationForgotPasswordUserArgs = {
    disableEmail?: InputMaybe<Scalars['Boolean']['input']>;
    email: Scalars['String']['input'];
    expiration?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationLoginUserArgs = {
    email?: InputMaybe<Scalars['String']['input']>;
    password?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRefreshTokenUserArgs = {
    token?: InputMaybe<Scalars['String']['input']>;
};

export type MutationResetPasswordUserArgs = {
    password?: InputMaybe<Scalars['String']['input']>;
    token?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUnlockUserArgs = {
    email: Scalars['String']['input'];
};

export type MutationUpdateCaseStudyListingArgs = {
    data: MutationCaseStudyListingInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationUpdateHeroArgs = {
    autosave?: InputMaybe<Scalars['Boolean']['input']>;
    data: MutationHeroUpdateInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type MutationUpdateIconArgs = {
    autosave?: InputMaybe<Scalars['Boolean']['input']>;
    data: MutationIconUpdateInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type MutationUpdateImageArgs = {
    autosave?: InputMaybe<Scalars['Boolean']['input']>;
    data: MutationImageUpdateInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type MutationUpdateNavArgs = {
    data: MutationNavInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationUpdatePageArgs = {
    autosave?: InputMaybe<Scalars['Boolean']['input']>;
    data: MutationPageUpdateInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type MutationUpdatePreferenceArgs = {
    key: Scalars['String']['input'];
    value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationUpdateProjectArgs = {
    autosave?: InputMaybe<Scalars['Boolean']['input']>;
    data: MutationProjectUpdateInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type MutationUpdateTestimonialArgs = {
    autosave?: InputMaybe<Scalars['Boolean']['input']>;
    data: MutationTestimonialUpdateInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type MutationUpdateTestimonialListingArgs = {
    data: MutationTestimonialListingInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationUpdateToolArgs = {
    autosave?: InputMaybe<Scalars['Boolean']['input']>;
    data: MutationToolUpdateInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type MutationUpdateToolboxListingArgs = {
    data: MutationToolboxListingInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationUpdateUserArgs = {
    autosave?: InputMaybe<Scalars['Boolean']['input']>;
    data: MutationUserUpdateInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type MutationVerifyEmailUserArgs = {
    token?: InputMaybe<Scalars['String']['input']>;
};

export type Nav = {
    __typename?: 'Nav';
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    footerCopyrightText?: Maybe<Scalars['String']['output']>;
    menuItems?: Maybe<Array<Nav_MenuItems>>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type NavDocAccessFields = {
    __typename?: 'NavDocAccessFields';
    createdAt?: Maybe<NavDocAccessFields_CreatedAt>;
    footerCopyrightText?: Maybe<NavDocAccessFields_FooterCopyrightText>;
    menuItems?: Maybe<NavDocAccessFields_MenuItems>;
    updatedAt?: Maybe<NavDocAccessFields_UpdatedAt>;
};

export type NavDocAccessFields_CreatedAt = {
    __typename?: 'NavDocAccessFields_createdAt';
    create?: Maybe<NavDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<NavDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<NavDocAccessFields_CreatedAt_Read>;
    update?: Maybe<NavDocAccessFields_CreatedAt_Update>;
};

export type NavDocAccessFields_CreatedAt_Create = {
    __typename?: 'NavDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_CreatedAt_Delete = {
    __typename?: 'NavDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_CreatedAt_Read = {
    __typename?: 'NavDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_CreatedAt_Update = {
    __typename?: 'NavDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_FooterCopyrightText = {
    __typename?: 'NavDocAccessFields_footerCopyrightText';
    create?: Maybe<NavDocAccessFields_FooterCopyrightText_Create>;
    delete?: Maybe<NavDocAccessFields_FooterCopyrightText_Delete>;
    read?: Maybe<NavDocAccessFields_FooterCopyrightText_Read>;
    update?: Maybe<NavDocAccessFields_FooterCopyrightText_Update>;
};

export type NavDocAccessFields_FooterCopyrightText_Create = {
    __typename?: 'NavDocAccessFields_footerCopyrightText_Create';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_FooterCopyrightText_Delete = {
    __typename?: 'NavDocAccessFields_footerCopyrightText_Delete';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_FooterCopyrightText_Read = {
    __typename?: 'NavDocAccessFields_footerCopyrightText_Read';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_FooterCopyrightText_Update = {
    __typename?: 'NavDocAccessFields_footerCopyrightText_Update';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_MenuItems = {
    __typename?: 'NavDocAccessFields_menuItems';
    create?: Maybe<NavDocAccessFields_MenuItems_Create>;
    delete?: Maybe<NavDocAccessFields_MenuItems_Delete>;
    fields?: Maybe<NavDocAccessFields_MenuItems_Fields>;
    read?: Maybe<NavDocAccessFields_MenuItems_Read>;
    update?: Maybe<NavDocAccessFields_MenuItems_Update>;
};

export type NavDocAccessFields_MenuItems_Create = {
    __typename?: 'NavDocAccessFields_menuItems_Create';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_MenuItems_Delete = {
    __typename?: 'NavDocAccessFields_menuItems_Delete';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_MenuItems_Fields = {
    __typename?: 'NavDocAccessFields_menuItems_Fields';
    customLabel?: Maybe<NavDocAccessFields_MenuItems_CustomLabel>;
    id?: Maybe<NavDocAccessFields_MenuItems_Id>;
    overridePageName?: Maybe<NavDocAccessFields_MenuItems_OverridePageName>;
    page?: Maybe<NavDocAccessFields_MenuItems_Page>;
};

export type NavDocAccessFields_MenuItems_Read = {
    __typename?: 'NavDocAccessFields_menuItems_Read';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_MenuItems_Update = {
    __typename?: 'NavDocAccessFields_menuItems_Update';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_MenuItems_CustomLabel = {
    __typename?: 'NavDocAccessFields_menuItems_customLabel';
    create?: Maybe<NavDocAccessFields_MenuItems_CustomLabel_Create>;
    delete?: Maybe<NavDocAccessFields_MenuItems_CustomLabel_Delete>;
    read?: Maybe<NavDocAccessFields_MenuItems_CustomLabel_Read>;
    update?: Maybe<NavDocAccessFields_MenuItems_CustomLabel_Update>;
};

export type NavDocAccessFields_MenuItems_CustomLabel_Create = {
    __typename?: 'NavDocAccessFields_menuItems_customLabel_Create';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_MenuItems_CustomLabel_Delete = {
    __typename?: 'NavDocAccessFields_menuItems_customLabel_Delete';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_MenuItems_CustomLabel_Read = {
    __typename?: 'NavDocAccessFields_menuItems_customLabel_Read';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_MenuItems_CustomLabel_Update = {
    __typename?: 'NavDocAccessFields_menuItems_customLabel_Update';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_MenuItems_Id = {
    __typename?: 'NavDocAccessFields_menuItems_id';
    create?: Maybe<NavDocAccessFields_MenuItems_Id_Create>;
    delete?: Maybe<NavDocAccessFields_MenuItems_Id_Delete>;
    read?: Maybe<NavDocAccessFields_MenuItems_Id_Read>;
    update?: Maybe<NavDocAccessFields_MenuItems_Id_Update>;
};

export type NavDocAccessFields_MenuItems_Id_Create = {
    __typename?: 'NavDocAccessFields_menuItems_id_Create';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_MenuItems_Id_Delete = {
    __typename?: 'NavDocAccessFields_menuItems_id_Delete';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_MenuItems_Id_Read = {
    __typename?: 'NavDocAccessFields_menuItems_id_Read';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_MenuItems_Id_Update = {
    __typename?: 'NavDocAccessFields_menuItems_id_Update';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_MenuItems_OverridePageName = {
    __typename?: 'NavDocAccessFields_menuItems_overridePageName';
    create?: Maybe<NavDocAccessFields_MenuItems_OverridePageName_Create>;
    delete?: Maybe<NavDocAccessFields_MenuItems_OverridePageName_Delete>;
    read?: Maybe<NavDocAccessFields_MenuItems_OverridePageName_Read>;
    update?: Maybe<NavDocAccessFields_MenuItems_OverridePageName_Update>;
};

export type NavDocAccessFields_MenuItems_OverridePageName_Create = {
    __typename?: 'NavDocAccessFields_menuItems_overridePageName_Create';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_MenuItems_OverridePageName_Delete = {
    __typename?: 'NavDocAccessFields_menuItems_overridePageName_Delete';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_MenuItems_OverridePageName_Read = {
    __typename?: 'NavDocAccessFields_menuItems_overridePageName_Read';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_MenuItems_OverridePageName_Update = {
    __typename?: 'NavDocAccessFields_menuItems_overridePageName_Update';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_MenuItems_Page = {
    __typename?: 'NavDocAccessFields_menuItems_page';
    create?: Maybe<NavDocAccessFields_MenuItems_Page_Create>;
    delete?: Maybe<NavDocAccessFields_MenuItems_Page_Delete>;
    read?: Maybe<NavDocAccessFields_MenuItems_Page_Read>;
    update?: Maybe<NavDocAccessFields_MenuItems_Page_Update>;
};

export type NavDocAccessFields_MenuItems_Page_Create = {
    __typename?: 'NavDocAccessFields_menuItems_page_Create';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_MenuItems_Page_Delete = {
    __typename?: 'NavDocAccessFields_menuItems_page_Delete';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_MenuItems_Page_Read = {
    __typename?: 'NavDocAccessFields_menuItems_page_Read';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_MenuItems_Page_Update = {
    __typename?: 'NavDocAccessFields_menuItems_page_Update';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_UpdatedAt = {
    __typename?: 'NavDocAccessFields_updatedAt';
    create?: Maybe<NavDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<NavDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<NavDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<NavDocAccessFields_UpdatedAt_Update>;
};

export type NavDocAccessFields_UpdatedAt_Create = {
    __typename?: 'NavDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'NavDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_UpdatedAt_Read = {
    __typename?: 'NavDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_UpdatedAt_Update = {
    __typename?: 'NavDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type NavFields = {
    __typename?: 'NavFields';
    createdAt?: Maybe<NavFields_CreatedAt>;
    footerCopyrightText?: Maybe<NavFields_FooterCopyrightText>;
    menuItems?: Maybe<NavFields_MenuItems>;
    updatedAt?: Maybe<NavFields_UpdatedAt>;
};

export type NavFields_CreatedAt = {
    __typename?: 'NavFields_createdAt';
    create?: Maybe<NavFields_CreatedAt_Create>;
    delete?: Maybe<NavFields_CreatedAt_Delete>;
    read?: Maybe<NavFields_CreatedAt_Read>;
    update?: Maybe<NavFields_CreatedAt_Update>;
};

export type NavFields_CreatedAt_Create = {
    __typename?: 'NavFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_CreatedAt_Delete = {
    __typename?: 'NavFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_CreatedAt_Read = {
    __typename?: 'NavFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_CreatedAt_Update = {
    __typename?: 'NavFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_FooterCopyrightText = {
    __typename?: 'NavFields_footerCopyrightText';
    create?: Maybe<NavFields_FooterCopyrightText_Create>;
    delete?: Maybe<NavFields_FooterCopyrightText_Delete>;
    read?: Maybe<NavFields_FooterCopyrightText_Read>;
    update?: Maybe<NavFields_FooterCopyrightText_Update>;
};

export type NavFields_FooterCopyrightText_Create = {
    __typename?: 'NavFields_footerCopyrightText_Create';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_FooterCopyrightText_Delete = {
    __typename?: 'NavFields_footerCopyrightText_Delete';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_FooterCopyrightText_Read = {
    __typename?: 'NavFields_footerCopyrightText_Read';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_FooterCopyrightText_Update = {
    __typename?: 'NavFields_footerCopyrightText_Update';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_MenuItems = {
    __typename?: 'NavFields_menuItems';
    create?: Maybe<NavFields_MenuItems_Create>;
    delete?: Maybe<NavFields_MenuItems_Delete>;
    fields?: Maybe<NavFields_MenuItems_Fields>;
    read?: Maybe<NavFields_MenuItems_Read>;
    update?: Maybe<NavFields_MenuItems_Update>;
};

export type NavFields_MenuItems_Create = {
    __typename?: 'NavFields_menuItems_Create';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_MenuItems_Delete = {
    __typename?: 'NavFields_menuItems_Delete';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_MenuItems_Fields = {
    __typename?: 'NavFields_menuItems_Fields';
    customLabel?: Maybe<NavFields_MenuItems_CustomLabel>;
    id?: Maybe<NavFields_MenuItems_Id>;
    overridePageName?: Maybe<NavFields_MenuItems_OverridePageName>;
    page?: Maybe<NavFields_MenuItems_Page>;
};

export type NavFields_MenuItems_Read = {
    __typename?: 'NavFields_menuItems_Read';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_MenuItems_Update = {
    __typename?: 'NavFields_menuItems_Update';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_MenuItems_CustomLabel = {
    __typename?: 'NavFields_menuItems_customLabel';
    create?: Maybe<NavFields_MenuItems_CustomLabel_Create>;
    delete?: Maybe<NavFields_MenuItems_CustomLabel_Delete>;
    read?: Maybe<NavFields_MenuItems_CustomLabel_Read>;
    update?: Maybe<NavFields_MenuItems_CustomLabel_Update>;
};

export type NavFields_MenuItems_CustomLabel_Create = {
    __typename?: 'NavFields_menuItems_customLabel_Create';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_MenuItems_CustomLabel_Delete = {
    __typename?: 'NavFields_menuItems_customLabel_Delete';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_MenuItems_CustomLabel_Read = {
    __typename?: 'NavFields_menuItems_customLabel_Read';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_MenuItems_CustomLabel_Update = {
    __typename?: 'NavFields_menuItems_customLabel_Update';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_MenuItems_Id = {
    __typename?: 'NavFields_menuItems_id';
    create?: Maybe<NavFields_MenuItems_Id_Create>;
    delete?: Maybe<NavFields_MenuItems_Id_Delete>;
    read?: Maybe<NavFields_MenuItems_Id_Read>;
    update?: Maybe<NavFields_MenuItems_Id_Update>;
};

export type NavFields_MenuItems_Id_Create = {
    __typename?: 'NavFields_menuItems_id_Create';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_MenuItems_Id_Delete = {
    __typename?: 'NavFields_menuItems_id_Delete';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_MenuItems_Id_Read = {
    __typename?: 'NavFields_menuItems_id_Read';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_MenuItems_Id_Update = {
    __typename?: 'NavFields_menuItems_id_Update';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_MenuItems_OverridePageName = {
    __typename?: 'NavFields_menuItems_overridePageName';
    create?: Maybe<NavFields_MenuItems_OverridePageName_Create>;
    delete?: Maybe<NavFields_MenuItems_OverridePageName_Delete>;
    read?: Maybe<NavFields_MenuItems_OverridePageName_Read>;
    update?: Maybe<NavFields_MenuItems_OverridePageName_Update>;
};

export type NavFields_MenuItems_OverridePageName_Create = {
    __typename?: 'NavFields_menuItems_overridePageName_Create';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_MenuItems_OverridePageName_Delete = {
    __typename?: 'NavFields_menuItems_overridePageName_Delete';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_MenuItems_OverridePageName_Read = {
    __typename?: 'NavFields_menuItems_overridePageName_Read';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_MenuItems_OverridePageName_Update = {
    __typename?: 'NavFields_menuItems_overridePageName_Update';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_MenuItems_Page = {
    __typename?: 'NavFields_menuItems_page';
    create?: Maybe<NavFields_MenuItems_Page_Create>;
    delete?: Maybe<NavFields_MenuItems_Page_Delete>;
    read?: Maybe<NavFields_MenuItems_Page_Read>;
    update?: Maybe<NavFields_MenuItems_Page_Update>;
};

export type NavFields_MenuItems_Page_Create = {
    __typename?: 'NavFields_menuItems_page_Create';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_MenuItems_Page_Delete = {
    __typename?: 'NavFields_menuItems_page_Delete';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_MenuItems_Page_Read = {
    __typename?: 'NavFields_menuItems_page_Read';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_MenuItems_Page_Update = {
    __typename?: 'NavFields_menuItems_page_Update';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_UpdatedAt = {
    __typename?: 'NavFields_updatedAt';
    create?: Maybe<NavFields_UpdatedAt_Create>;
    delete?: Maybe<NavFields_UpdatedAt_Delete>;
    read?: Maybe<NavFields_UpdatedAt_Read>;
    update?: Maybe<NavFields_UpdatedAt_Update>;
};

export type NavFields_UpdatedAt_Create = {
    __typename?: 'NavFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_UpdatedAt_Delete = {
    __typename?: 'NavFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_UpdatedAt_Read = {
    __typename?: 'NavFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_UpdatedAt_Update = {
    __typename?: 'NavFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type NavReadAccess = {
    __typename?: 'NavReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type NavReadDocAccess = {
    __typename?: 'NavReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type NavUpdateAccess = {
    __typename?: 'NavUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type NavUpdateDocAccess = {
    __typename?: 'NavUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Nav_MenuItems = {
    __typename?: 'Nav_MenuItems';
    customLabel?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    overridePageName?: Maybe<Scalars['Boolean']['output']>;
    page?: Maybe<Page>;
};

export type Page = {
    __typename?: 'Page';
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    slug?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Page_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Page_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Slug_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Title_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Page_Where = {
    AND?: InputMaybe<Array<InputMaybe<Page_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<Page_Where_Or>>>;
    createdAt?: InputMaybe<Page_CreatedAt_Operator>;
    id?: InputMaybe<Page_Id_Operator>;
    slug?: InputMaybe<Page_Slug_Operator>;
    title?: InputMaybe<Page_Title_Operator>;
    updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Page_Where_And = {
    createdAt?: InputMaybe<Page_CreatedAt_Operator>;
    id?: InputMaybe<Page_Id_Operator>;
    slug?: InputMaybe<Page_Slug_Operator>;
    title?: InputMaybe<Page_Title_Operator>;
    updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Page_Where_Or = {
    createdAt?: InputMaybe<Page_CreatedAt_Operator>;
    id?: InputMaybe<Page_Id_Operator>;
    slug?: InputMaybe<Page_Slug_Operator>;
    title?: InputMaybe<Page_Title_Operator>;
    updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Pages = {
    __typename?: 'Pages';
    docs?: Maybe<Array<Maybe<Page>>>;
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
    hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
    limit?: Maybe<Scalars['Int']['output']>;
    nextPage?: Maybe<Scalars['Int']['output']>;
    offset?: Maybe<Scalars['Int']['output']>;
    page?: Maybe<Scalars['Int']['output']>;
    pagingCounter?: Maybe<Scalars['Int']['output']>;
    prevPage?: Maybe<Scalars['Int']['output']>;
    totalDocs?: Maybe<Scalars['Int']['output']>;
    totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PagesCreateAccess = {
    __typename?: 'PagesCreateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesCreateDocAccess = {
    __typename?: 'PagesCreateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesDeleteAccess = {
    __typename?: 'PagesDeleteAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesDeleteDocAccess = {
    __typename?: 'PagesDeleteDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesDocAccessFields = {
    __typename?: 'PagesDocAccessFields';
    createdAt?: Maybe<PagesDocAccessFields_CreatedAt>;
    slug?: Maybe<PagesDocAccessFields_Slug>;
    title?: Maybe<PagesDocAccessFields_Title>;
    updatedAt?: Maybe<PagesDocAccessFields_UpdatedAt>;
};

export type PagesDocAccessFields_CreatedAt = {
    __typename?: 'PagesDocAccessFields_createdAt';
    create?: Maybe<PagesDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<PagesDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<PagesDocAccessFields_CreatedAt_Read>;
    update?: Maybe<PagesDocAccessFields_CreatedAt_Update>;
};

export type PagesDocAccessFields_CreatedAt_Create = {
    __typename?: 'PagesDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt_Delete = {
    __typename?: 'PagesDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt_Read = {
    __typename?: 'PagesDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt_Update = {
    __typename?: 'PagesDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug = {
    __typename?: 'PagesDocAccessFields_slug';
    create?: Maybe<PagesDocAccessFields_Slug_Create>;
    delete?: Maybe<PagesDocAccessFields_Slug_Delete>;
    read?: Maybe<PagesDocAccessFields_Slug_Read>;
    update?: Maybe<PagesDocAccessFields_Slug_Update>;
};

export type PagesDocAccessFields_Slug_Create = {
    __typename?: 'PagesDocAccessFields_slug_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug_Delete = {
    __typename?: 'PagesDocAccessFields_slug_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug_Read = {
    __typename?: 'PagesDocAccessFields_slug_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug_Update = {
    __typename?: 'PagesDocAccessFields_slug_Update';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title = {
    __typename?: 'PagesDocAccessFields_title';
    create?: Maybe<PagesDocAccessFields_Title_Create>;
    delete?: Maybe<PagesDocAccessFields_Title_Delete>;
    read?: Maybe<PagesDocAccessFields_Title_Read>;
    update?: Maybe<PagesDocAccessFields_Title_Update>;
};

export type PagesDocAccessFields_Title_Create = {
    __typename?: 'PagesDocAccessFields_title_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title_Delete = {
    __typename?: 'PagesDocAccessFields_title_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title_Read = {
    __typename?: 'PagesDocAccessFields_title_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title_Update = {
    __typename?: 'PagesDocAccessFields_title_Update';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt = {
    __typename?: 'PagesDocAccessFields_updatedAt';
    create?: Maybe<PagesDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<PagesDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<PagesDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<PagesDocAccessFields_UpdatedAt_Update>;
};

export type PagesDocAccessFields_UpdatedAt_Create = {
    __typename?: 'PagesDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'PagesDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt_Read = {
    __typename?: 'PagesDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt_Update = {
    __typename?: 'PagesDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields = {
    __typename?: 'PagesFields';
    createdAt?: Maybe<PagesFields_CreatedAt>;
    slug?: Maybe<PagesFields_Slug>;
    title?: Maybe<PagesFields_Title>;
    updatedAt?: Maybe<PagesFields_UpdatedAt>;
};

export type PagesFields_CreatedAt = {
    __typename?: 'PagesFields_createdAt';
    create?: Maybe<PagesFields_CreatedAt_Create>;
    delete?: Maybe<PagesFields_CreatedAt_Delete>;
    read?: Maybe<PagesFields_CreatedAt_Read>;
    update?: Maybe<PagesFields_CreatedAt_Update>;
};

export type PagesFields_CreatedAt_Create = {
    __typename?: 'PagesFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt_Delete = {
    __typename?: 'PagesFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt_Read = {
    __typename?: 'PagesFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt_Update = {
    __typename?: 'PagesFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug = {
    __typename?: 'PagesFields_slug';
    create?: Maybe<PagesFields_Slug_Create>;
    delete?: Maybe<PagesFields_Slug_Delete>;
    read?: Maybe<PagesFields_Slug_Read>;
    update?: Maybe<PagesFields_Slug_Update>;
};

export type PagesFields_Slug_Create = {
    __typename?: 'PagesFields_slug_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug_Delete = {
    __typename?: 'PagesFields_slug_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug_Read = {
    __typename?: 'PagesFields_slug_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug_Update = {
    __typename?: 'PagesFields_slug_Update';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title = {
    __typename?: 'PagesFields_title';
    create?: Maybe<PagesFields_Title_Create>;
    delete?: Maybe<PagesFields_Title_Delete>;
    read?: Maybe<PagesFields_Title_Read>;
    update?: Maybe<PagesFields_Title_Update>;
};

export type PagesFields_Title_Create = {
    __typename?: 'PagesFields_title_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title_Delete = {
    __typename?: 'PagesFields_title_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title_Read = {
    __typename?: 'PagesFields_title_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title_Update = {
    __typename?: 'PagesFields_title_Update';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt = {
    __typename?: 'PagesFields_updatedAt';
    create?: Maybe<PagesFields_UpdatedAt_Create>;
    delete?: Maybe<PagesFields_UpdatedAt_Delete>;
    read?: Maybe<PagesFields_UpdatedAt_Read>;
    update?: Maybe<PagesFields_UpdatedAt_Update>;
};

export type PagesFields_UpdatedAt_Create = {
    __typename?: 'PagesFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt_Delete = {
    __typename?: 'PagesFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt_Read = {
    __typename?: 'PagesFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt_Update = {
    __typename?: 'PagesFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type PagesReadAccess = {
    __typename?: 'PagesReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesReadDocAccess = {
    __typename?: 'PagesReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesUpdateAccess = {
    __typename?: 'PagesUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesUpdateDocAccess = {
    __typename?: 'PagesUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Preference = {
    __typename?: 'Preference';
    createdAt: Scalars['DateTime']['output'];
    key: Scalars['String']['output'];
    updatedAt: Scalars['DateTime']['output'];
    value?: Maybe<Scalars['JSON']['output']>;
};

export type Project = {
    __typename?: 'Project';
    cardInfo?: Maybe<Project_CardInfo>;
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    intro?: Maybe<Project_Intro>;
    title: Scalars['String']['output'];
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Project_CardInfo = {
    __typename?: 'Project_CardInfo';
    image?: Maybe<Image>;
    snippet?: Maybe<Scalars['String']['output']>;
};

export type Project_CardInfoImageArgs = {
    where?: InputMaybe<Project_CardInfo_Image_Where>;
};

export type Project_CardInfo_Image_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_CardInfo_Image_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Project_CardInfo_Image_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_CardInfo_Image_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Project_CardInfo_Image_Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Project_CardInfo_Image_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_CardInfo_Image_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_CardInfo_Image_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_CardInfo_Image_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Project_CardInfo_Image_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Project_CardInfo_Image_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_CardInfo_Image_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_CardInfo_Image_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Project_CardInfo_Image_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Project_CardInfo_Image_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_CardInfo_Image_Where = {
    AND?: InputMaybe<Array<InputMaybe<Project_CardInfo_Image_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<Project_CardInfo_Image_Where_Or>>>;
    alt?: InputMaybe<Project_CardInfo_Image_Alt_Operator>;
    createdAt?: InputMaybe<Project_CardInfo_Image_CreatedAt_Operator>;
    filename?: InputMaybe<Project_CardInfo_Image_Filename_Operator>;
    filesize?: InputMaybe<Project_CardInfo_Image_Filesize_Operator>;
    height?: InputMaybe<Project_CardInfo_Image_Height_Operator>;
    id?: InputMaybe<Project_CardInfo_Image_Id_Operator>;
    mimeType?: InputMaybe<Project_CardInfo_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Project_CardInfo_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Project_CardInfo_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Project_CardInfo_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Project_CardInfo_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Project_CardInfo_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Project_CardInfo_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Project_CardInfo_Image_UpdatedAt_Operator>;
    url?: InputMaybe<Project_CardInfo_Image_Url_Operator>;
    width?: InputMaybe<Project_CardInfo_Image_Width_Operator>;
};

export type Project_CardInfo_Image_Where_And = {
    alt?: InputMaybe<Project_CardInfo_Image_Alt_Operator>;
    createdAt?: InputMaybe<Project_CardInfo_Image_CreatedAt_Operator>;
    filename?: InputMaybe<Project_CardInfo_Image_Filename_Operator>;
    filesize?: InputMaybe<Project_CardInfo_Image_Filesize_Operator>;
    height?: InputMaybe<Project_CardInfo_Image_Height_Operator>;
    id?: InputMaybe<Project_CardInfo_Image_Id_Operator>;
    mimeType?: InputMaybe<Project_CardInfo_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Project_CardInfo_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Project_CardInfo_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Project_CardInfo_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Project_CardInfo_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Project_CardInfo_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Project_CardInfo_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Project_CardInfo_Image_UpdatedAt_Operator>;
    url?: InputMaybe<Project_CardInfo_Image_Url_Operator>;
    width?: InputMaybe<Project_CardInfo_Image_Width_Operator>;
};

export type Project_CardInfo_Image_Where_Or = {
    alt?: InputMaybe<Project_CardInfo_Image_Alt_Operator>;
    createdAt?: InputMaybe<Project_CardInfo_Image_CreatedAt_Operator>;
    filename?: InputMaybe<Project_CardInfo_Image_Filename_Operator>;
    filesize?: InputMaybe<Project_CardInfo_Image_Filesize_Operator>;
    height?: InputMaybe<Project_CardInfo_Image_Height_Operator>;
    id?: InputMaybe<Project_CardInfo_Image_Id_Operator>;
    mimeType?: InputMaybe<Project_CardInfo_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Project_CardInfo_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Project_CardInfo_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Project_CardInfo_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Project_CardInfo_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Project_CardInfo_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Project_CardInfo_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Project_CardInfo_Image_UpdatedAt_Operator>;
    url?: InputMaybe<Project_CardInfo_Image_Url_Operator>;
    width?: InputMaybe<Project_CardInfo_Image_Width_Operator>;
};

export type Project_CardInfo_Image_Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Project_Intro = {
    __typename?: 'Project_Intro';
    description?: Maybe<Scalars['String']['output']>;
    image?: Maybe<Image>;
};

export type Project_IntroImageArgs = {
    where?: InputMaybe<Project_Intro_Image_Where>;
};

export type Project_Intro_Image_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_Intro_Image_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Project_Intro_Image_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_Intro_Image_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Project_Intro_Image_Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Project_Intro_Image_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_Intro_Image_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_Intro_Image_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_Intro_Image_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Project_Intro_Image_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Project_Intro_Image_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_Intro_Image_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_Intro_Image_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Project_Intro_Image_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Project_Intro_Image_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_Intro_Image_Where = {
    AND?: InputMaybe<Array<InputMaybe<Project_Intro_Image_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<Project_Intro_Image_Where_Or>>>;
    alt?: InputMaybe<Project_Intro_Image_Alt_Operator>;
    createdAt?: InputMaybe<Project_Intro_Image_CreatedAt_Operator>;
    filename?: InputMaybe<Project_Intro_Image_Filename_Operator>;
    filesize?: InputMaybe<Project_Intro_Image_Filesize_Operator>;
    height?: InputMaybe<Project_Intro_Image_Height_Operator>;
    id?: InputMaybe<Project_Intro_Image_Id_Operator>;
    mimeType?: InputMaybe<Project_Intro_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Project_Intro_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Project_Intro_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Project_Intro_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Project_Intro_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Project_Intro_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Project_Intro_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Project_Intro_Image_UpdatedAt_Operator>;
    url?: InputMaybe<Project_Intro_Image_Url_Operator>;
    width?: InputMaybe<Project_Intro_Image_Width_Operator>;
};

export type Project_Intro_Image_Where_And = {
    alt?: InputMaybe<Project_Intro_Image_Alt_Operator>;
    createdAt?: InputMaybe<Project_Intro_Image_CreatedAt_Operator>;
    filename?: InputMaybe<Project_Intro_Image_Filename_Operator>;
    filesize?: InputMaybe<Project_Intro_Image_Filesize_Operator>;
    height?: InputMaybe<Project_Intro_Image_Height_Operator>;
    id?: InputMaybe<Project_Intro_Image_Id_Operator>;
    mimeType?: InputMaybe<Project_Intro_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Project_Intro_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Project_Intro_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Project_Intro_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Project_Intro_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Project_Intro_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Project_Intro_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Project_Intro_Image_UpdatedAt_Operator>;
    url?: InputMaybe<Project_Intro_Image_Url_Operator>;
    width?: InputMaybe<Project_Intro_Image_Width_Operator>;
};

export type Project_Intro_Image_Where_Or = {
    alt?: InputMaybe<Project_Intro_Image_Alt_Operator>;
    createdAt?: InputMaybe<Project_Intro_Image_CreatedAt_Operator>;
    filename?: InputMaybe<Project_Intro_Image_Filename_Operator>;
    filesize?: InputMaybe<Project_Intro_Image_Filesize_Operator>;
    height?: InputMaybe<Project_Intro_Image_Height_Operator>;
    id?: InputMaybe<Project_Intro_Image_Id_Operator>;
    mimeType?: InputMaybe<Project_Intro_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Project_Intro_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Project_Intro_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Project_Intro_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Project_Intro_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Project_Intro_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Project_Intro_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Project_Intro_Image_UpdatedAt_Operator>;
    url?: InputMaybe<Project_Intro_Image_Url_Operator>;
    width?: InputMaybe<Project_Intro_Image_Width_Operator>;
};

export type Project_Intro_Image_Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Project_CardInfo__Image_Operator = {
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Project_CardInfo__Snippet_Operator = {
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Project_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Project_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_Intro__Description_Operator = {
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Project_Intro__Image_Operator = {
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Project_Title_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Project_Where = {
    AND?: InputMaybe<Array<InputMaybe<Project_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<Project_Where_Or>>>;
    cardInfo__image?: InputMaybe<Project_CardInfo__Image_Operator>;
    cardInfo__snippet?: InputMaybe<Project_CardInfo__Snippet_Operator>;
    createdAt?: InputMaybe<Project_CreatedAt_Operator>;
    id?: InputMaybe<Project_Id_Operator>;
    intro__description?: InputMaybe<Project_Intro__Description_Operator>;
    intro__image?: InputMaybe<Project_Intro__Image_Operator>;
    title?: InputMaybe<Project_Title_Operator>;
    updatedAt?: InputMaybe<Project_UpdatedAt_Operator>;
};

export type Project_Where_And = {
    cardInfo__image?: InputMaybe<Project_CardInfo__Image_Operator>;
    cardInfo__snippet?: InputMaybe<Project_CardInfo__Snippet_Operator>;
    createdAt?: InputMaybe<Project_CreatedAt_Operator>;
    id?: InputMaybe<Project_Id_Operator>;
    intro__description?: InputMaybe<Project_Intro__Description_Operator>;
    intro__image?: InputMaybe<Project_Intro__Image_Operator>;
    title?: InputMaybe<Project_Title_Operator>;
    updatedAt?: InputMaybe<Project_UpdatedAt_Operator>;
};

export type Project_Where_Or = {
    cardInfo__image?: InputMaybe<Project_CardInfo__Image_Operator>;
    cardInfo__snippet?: InputMaybe<Project_CardInfo__Snippet_Operator>;
    createdAt?: InputMaybe<Project_CreatedAt_Operator>;
    id?: InputMaybe<Project_Id_Operator>;
    intro__description?: InputMaybe<Project_Intro__Description_Operator>;
    intro__image?: InputMaybe<Project_Intro__Image_Operator>;
    title?: InputMaybe<Project_Title_Operator>;
    updatedAt?: InputMaybe<Project_UpdatedAt_Operator>;
};

export type Projects = {
    __typename?: 'Projects';
    docs?: Maybe<Array<Maybe<Project>>>;
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
    hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
    limit?: Maybe<Scalars['Int']['output']>;
    nextPage?: Maybe<Scalars['Int']['output']>;
    offset?: Maybe<Scalars['Int']['output']>;
    page?: Maybe<Scalars['Int']['output']>;
    pagingCounter?: Maybe<Scalars['Int']['output']>;
    prevPage?: Maybe<Scalars['Int']['output']>;
    totalDocs?: Maybe<Scalars['Int']['output']>;
    totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ProjectsCreateAccess = {
    __typename?: 'ProjectsCreateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProjectsCreateDocAccess = {
    __typename?: 'ProjectsCreateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProjectsDeleteAccess = {
    __typename?: 'ProjectsDeleteAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProjectsDeleteDocAccess = {
    __typename?: 'ProjectsDeleteDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProjectsDocAccessFields = {
    __typename?: 'ProjectsDocAccessFields';
    cardInfo?: Maybe<ProjectsDocAccessFields_CardInfo>;
    createdAt?: Maybe<ProjectsDocAccessFields_CreatedAt>;
    intro?: Maybe<ProjectsDocAccessFields_Intro>;
    title?: Maybe<ProjectsDocAccessFields_Title>;
    updatedAt?: Maybe<ProjectsDocAccessFields_UpdatedAt>;
};

export type ProjectsDocAccessFields_CardInfo = {
    __typename?: 'ProjectsDocAccessFields_cardInfo';
    create?: Maybe<ProjectsDocAccessFields_CardInfo_Create>;
    delete?: Maybe<ProjectsDocAccessFields_CardInfo_Delete>;
    fields?: Maybe<ProjectsDocAccessFields_CardInfo_Fields>;
    read?: Maybe<ProjectsDocAccessFields_CardInfo_Read>;
    update?: Maybe<ProjectsDocAccessFields_CardInfo_Update>;
};

export type ProjectsDocAccessFields_CardInfo_Create = {
    __typename?: 'ProjectsDocAccessFields_cardInfo_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_CardInfo_Delete = {
    __typename?: 'ProjectsDocAccessFields_cardInfo_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_CardInfo_Fields = {
    __typename?: 'ProjectsDocAccessFields_cardInfo_Fields';
    image?: Maybe<ProjectsDocAccessFields_CardInfo_Image>;
    snippet?: Maybe<ProjectsDocAccessFields_CardInfo_Snippet>;
};

export type ProjectsDocAccessFields_CardInfo_Read = {
    __typename?: 'ProjectsDocAccessFields_cardInfo_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_CardInfo_Update = {
    __typename?: 'ProjectsDocAccessFields_cardInfo_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_CardInfo_Image = {
    __typename?: 'ProjectsDocAccessFields_cardInfo_image';
    create?: Maybe<ProjectsDocAccessFields_CardInfo_Image_Create>;
    delete?: Maybe<ProjectsDocAccessFields_CardInfo_Image_Delete>;
    read?: Maybe<ProjectsDocAccessFields_CardInfo_Image_Read>;
    update?: Maybe<ProjectsDocAccessFields_CardInfo_Image_Update>;
};

export type ProjectsDocAccessFields_CardInfo_Image_Create = {
    __typename?: 'ProjectsDocAccessFields_cardInfo_image_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_CardInfo_Image_Delete = {
    __typename?: 'ProjectsDocAccessFields_cardInfo_image_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_CardInfo_Image_Read = {
    __typename?: 'ProjectsDocAccessFields_cardInfo_image_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_CardInfo_Image_Update = {
    __typename?: 'ProjectsDocAccessFields_cardInfo_image_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_CardInfo_Snippet = {
    __typename?: 'ProjectsDocAccessFields_cardInfo_snippet';
    create?: Maybe<ProjectsDocAccessFields_CardInfo_Snippet_Create>;
    delete?: Maybe<ProjectsDocAccessFields_CardInfo_Snippet_Delete>;
    read?: Maybe<ProjectsDocAccessFields_CardInfo_Snippet_Read>;
    update?: Maybe<ProjectsDocAccessFields_CardInfo_Snippet_Update>;
};

export type ProjectsDocAccessFields_CardInfo_Snippet_Create = {
    __typename?: 'ProjectsDocAccessFields_cardInfo_snippet_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_CardInfo_Snippet_Delete = {
    __typename?: 'ProjectsDocAccessFields_cardInfo_snippet_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_CardInfo_Snippet_Read = {
    __typename?: 'ProjectsDocAccessFields_cardInfo_snippet_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_CardInfo_Snippet_Update = {
    __typename?: 'ProjectsDocAccessFields_cardInfo_snippet_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_CreatedAt = {
    __typename?: 'ProjectsDocAccessFields_createdAt';
    create?: Maybe<ProjectsDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<ProjectsDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<ProjectsDocAccessFields_CreatedAt_Read>;
    update?: Maybe<ProjectsDocAccessFields_CreatedAt_Update>;
};

export type ProjectsDocAccessFields_CreatedAt_Create = {
    __typename?: 'ProjectsDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_CreatedAt_Delete = {
    __typename?: 'ProjectsDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_CreatedAt_Read = {
    __typename?: 'ProjectsDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_CreatedAt_Update = {
    __typename?: 'ProjectsDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Intro = {
    __typename?: 'ProjectsDocAccessFields_intro';
    create?: Maybe<ProjectsDocAccessFields_Intro_Create>;
    delete?: Maybe<ProjectsDocAccessFields_Intro_Delete>;
    fields?: Maybe<ProjectsDocAccessFields_Intro_Fields>;
    read?: Maybe<ProjectsDocAccessFields_Intro_Read>;
    update?: Maybe<ProjectsDocAccessFields_Intro_Update>;
};

export type ProjectsDocAccessFields_Intro_Create = {
    __typename?: 'ProjectsDocAccessFields_intro_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Intro_Delete = {
    __typename?: 'ProjectsDocAccessFields_intro_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Intro_Fields = {
    __typename?: 'ProjectsDocAccessFields_intro_Fields';
    description?: Maybe<ProjectsDocAccessFields_Intro_Description>;
    image?: Maybe<ProjectsDocAccessFields_Intro_Image>;
};

export type ProjectsDocAccessFields_Intro_Read = {
    __typename?: 'ProjectsDocAccessFields_intro_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Intro_Update = {
    __typename?: 'ProjectsDocAccessFields_intro_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Intro_Description = {
    __typename?: 'ProjectsDocAccessFields_intro_description';
    create?: Maybe<ProjectsDocAccessFields_Intro_Description_Create>;
    delete?: Maybe<ProjectsDocAccessFields_Intro_Description_Delete>;
    read?: Maybe<ProjectsDocAccessFields_Intro_Description_Read>;
    update?: Maybe<ProjectsDocAccessFields_Intro_Description_Update>;
};

export type ProjectsDocAccessFields_Intro_Description_Create = {
    __typename?: 'ProjectsDocAccessFields_intro_description_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Intro_Description_Delete = {
    __typename?: 'ProjectsDocAccessFields_intro_description_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Intro_Description_Read = {
    __typename?: 'ProjectsDocAccessFields_intro_description_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Intro_Description_Update = {
    __typename?: 'ProjectsDocAccessFields_intro_description_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Intro_Image = {
    __typename?: 'ProjectsDocAccessFields_intro_image';
    create?: Maybe<ProjectsDocAccessFields_Intro_Image_Create>;
    delete?: Maybe<ProjectsDocAccessFields_Intro_Image_Delete>;
    read?: Maybe<ProjectsDocAccessFields_Intro_Image_Read>;
    update?: Maybe<ProjectsDocAccessFields_Intro_Image_Update>;
};

export type ProjectsDocAccessFields_Intro_Image_Create = {
    __typename?: 'ProjectsDocAccessFields_intro_image_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Intro_Image_Delete = {
    __typename?: 'ProjectsDocAccessFields_intro_image_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Intro_Image_Read = {
    __typename?: 'ProjectsDocAccessFields_intro_image_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Intro_Image_Update = {
    __typename?: 'ProjectsDocAccessFields_intro_image_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Title = {
    __typename?: 'ProjectsDocAccessFields_title';
    create?: Maybe<ProjectsDocAccessFields_Title_Create>;
    delete?: Maybe<ProjectsDocAccessFields_Title_Delete>;
    read?: Maybe<ProjectsDocAccessFields_Title_Read>;
    update?: Maybe<ProjectsDocAccessFields_Title_Update>;
};

export type ProjectsDocAccessFields_Title_Create = {
    __typename?: 'ProjectsDocAccessFields_title_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Title_Delete = {
    __typename?: 'ProjectsDocAccessFields_title_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Title_Read = {
    __typename?: 'ProjectsDocAccessFields_title_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Title_Update = {
    __typename?: 'ProjectsDocAccessFields_title_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_UpdatedAt = {
    __typename?: 'ProjectsDocAccessFields_updatedAt';
    create?: Maybe<ProjectsDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<ProjectsDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<ProjectsDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<ProjectsDocAccessFields_UpdatedAt_Update>;
};

export type ProjectsDocAccessFields_UpdatedAt_Create = {
    __typename?: 'ProjectsDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'ProjectsDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_UpdatedAt_Read = {
    __typename?: 'ProjectsDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_UpdatedAt_Update = {
    __typename?: 'ProjectsDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields = {
    __typename?: 'ProjectsFields';
    cardInfo?: Maybe<ProjectsFields_CardInfo>;
    createdAt?: Maybe<ProjectsFields_CreatedAt>;
    intro?: Maybe<ProjectsFields_Intro>;
    title?: Maybe<ProjectsFields_Title>;
    updatedAt?: Maybe<ProjectsFields_UpdatedAt>;
};

export type ProjectsFields_CardInfo = {
    __typename?: 'ProjectsFields_cardInfo';
    create?: Maybe<ProjectsFields_CardInfo_Create>;
    delete?: Maybe<ProjectsFields_CardInfo_Delete>;
    fields?: Maybe<ProjectsFields_CardInfo_Fields>;
    read?: Maybe<ProjectsFields_CardInfo_Read>;
    update?: Maybe<ProjectsFields_CardInfo_Update>;
};

export type ProjectsFields_CardInfo_Create = {
    __typename?: 'ProjectsFields_cardInfo_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_CardInfo_Delete = {
    __typename?: 'ProjectsFields_cardInfo_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_CardInfo_Fields = {
    __typename?: 'ProjectsFields_cardInfo_Fields';
    image?: Maybe<ProjectsFields_CardInfo_Image>;
    snippet?: Maybe<ProjectsFields_CardInfo_Snippet>;
};

export type ProjectsFields_CardInfo_Read = {
    __typename?: 'ProjectsFields_cardInfo_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_CardInfo_Update = {
    __typename?: 'ProjectsFields_cardInfo_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_CardInfo_Image = {
    __typename?: 'ProjectsFields_cardInfo_image';
    create?: Maybe<ProjectsFields_CardInfo_Image_Create>;
    delete?: Maybe<ProjectsFields_CardInfo_Image_Delete>;
    read?: Maybe<ProjectsFields_CardInfo_Image_Read>;
    update?: Maybe<ProjectsFields_CardInfo_Image_Update>;
};

export type ProjectsFields_CardInfo_Image_Create = {
    __typename?: 'ProjectsFields_cardInfo_image_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_CardInfo_Image_Delete = {
    __typename?: 'ProjectsFields_cardInfo_image_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_CardInfo_Image_Read = {
    __typename?: 'ProjectsFields_cardInfo_image_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_CardInfo_Image_Update = {
    __typename?: 'ProjectsFields_cardInfo_image_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_CardInfo_Snippet = {
    __typename?: 'ProjectsFields_cardInfo_snippet';
    create?: Maybe<ProjectsFields_CardInfo_Snippet_Create>;
    delete?: Maybe<ProjectsFields_CardInfo_Snippet_Delete>;
    read?: Maybe<ProjectsFields_CardInfo_Snippet_Read>;
    update?: Maybe<ProjectsFields_CardInfo_Snippet_Update>;
};

export type ProjectsFields_CardInfo_Snippet_Create = {
    __typename?: 'ProjectsFields_cardInfo_snippet_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_CardInfo_Snippet_Delete = {
    __typename?: 'ProjectsFields_cardInfo_snippet_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_CardInfo_Snippet_Read = {
    __typename?: 'ProjectsFields_cardInfo_snippet_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_CardInfo_Snippet_Update = {
    __typename?: 'ProjectsFields_cardInfo_snippet_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_CreatedAt = {
    __typename?: 'ProjectsFields_createdAt';
    create?: Maybe<ProjectsFields_CreatedAt_Create>;
    delete?: Maybe<ProjectsFields_CreatedAt_Delete>;
    read?: Maybe<ProjectsFields_CreatedAt_Read>;
    update?: Maybe<ProjectsFields_CreatedAt_Update>;
};

export type ProjectsFields_CreatedAt_Create = {
    __typename?: 'ProjectsFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_CreatedAt_Delete = {
    __typename?: 'ProjectsFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_CreatedAt_Read = {
    __typename?: 'ProjectsFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_CreatedAt_Update = {
    __typename?: 'ProjectsFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Intro = {
    __typename?: 'ProjectsFields_intro';
    create?: Maybe<ProjectsFields_Intro_Create>;
    delete?: Maybe<ProjectsFields_Intro_Delete>;
    fields?: Maybe<ProjectsFields_Intro_Fields>;
    read?: Maybe<ProjectsFields_Intro_Read>;
    update?: Maybe<ProjectsFields_Intro_Update>;
};

export type ProjectsFields_Intro_Create = {
    __typename?: 'ProjectsFields_intro_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Intro_Delete = {
    __typename?: 'ProjectsFields_intro_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Intro_Fields = {
    __typename?: 'ProjectsFields_intro_Fields';
    description?: Maybe<ProjectsFields_Intro_Description>;
    image?: Maybe<ProjectsFields_Intro_Image>;
};

export type ProjectsFields_Intro_Read = {
    __typename?: 'ProjectsFields_intro_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Intro_Update = {
    __typename?: 'ProjectsFields_intro_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Intro_Description = {
    __typename?: 'ProjectsFields_intro_description';
    create?: Maybe<ProjectsFields_Intro_Description_Create>;
    delete?: Maybe<ProjectsFields_Intro_Description_Delete>;
    read?: Maybe<ProjectsFields_Intro_Description_Read>;
    update?: Maybe<ProjectsFields_Intro_Description_Update>;
};

export type ProjectsFields_Intro_Description_Create = {
    __typename?: 'ProjectsFields_intro_description_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Intro_Description_Delete = {
    __typename?: 'ProjectsFields_intro_description_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Intro_Description_Read = {
    __typename?: 'ProjectsFields_intro_description_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Intro_Description_Update = {
    __typename?: 'ProjectsFields_intro_description_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Intro_Image = {
    __typename?: 'ProjectsFields_intro_image';
    create?: Maybe<ProjectsFields_Intro_Image_Create>;
    delete?: Maybe<ProjectsFields_Intro_Image_Delete>;
    read?: Maybe<ProjectsFields_Intro_Image_Read>;
    update?: Maybe<ProjectsFields_Intro_Image_Update>;
};

export type ProjectsFields_Intro_Image_Create = {
    __typename?: 'ProjectsFields_intro_image_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Intro_Image_Delete = {
    __typename?: 'ProjectsFields_intro_image_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Intro_Image_Read = {
    __typename?: 'ProjectsFields_intro_image_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Intro_Image_Update = {
    __typename?: 'ProjectsFields_intro_image_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Title = {
    __typename?: 'ProjectsFields_title';
    create?: Maybe<ProjectsFields_Title_Create>;
    delete?: Maybe<ProjectsFields_Title_Delete>;
    read?: Maybe<ProjectsFields_Title_Read>;
    update?: Maybe<ProjectsFields_Title_Update>;
};

export type ProjectsFields_Title_Create = {
    __typename?: 'ProjectsFields_title_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Title_Delete = {
    __typename?: 'ProjectsFields_title_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Title_Read = {
    __typename?: 'ProjectsFields_title_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Title_Update = {
    __typename?: 'ProjectsFields_title_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_UpdatedAt = {
    __typename?: 'ProjectsFields_updatedAt';
    create?: Maybe<ProjectsFields_UpdatedAt_Create>;
    delete?: Maybe<ProjectsFields_UpdatedAt_Delete>;
    read?: Maybe<ProjectsFields_UpdatedAt_Read>;
    update?: Maybe<ProjectsFields_UpdatedAt_Update>;
};

export type ProjectsFields_UpdatedAt_Create = {
    __typename?: 'ProjectsFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_UpdatedAt_Delete = {
    __typename?: 'ProjectsFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_UpdatedAt_Read = {
    __typename?: 'ProjectsFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_UpdatedAt_Update = {
    __typename?: 'ProjectsFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsReadAccess = {
    __typename?: 'ProjectsReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProjectsReadDocAccess = {
    __typename?: 'ProjectsReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProjectsUpdateAccess = {
    __typename?: 'ProjectsUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ProjectsUpdateDocAccess = {
    __typename?: 'ProjectsUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Query = {
    __typename?: 'Query';
    Access?: Maybe<Access>;
    CaseStudyListing?: Maybe<CaseStudyListing>;
    Hero?: Maybe<Hero>;
    Heroes?: Maybe<Heroes>;
    Icon?: Maybe<Icon>;
    Icons?: Maybe<Icons>;
    Image?: Maybe<Image>;
    Images?: Maybe<Images>;
    Nav?: Maybe<Nav>;
    Page?: Maybe<Page>;
    Pages?: Maybe<Pages>;
    Preference?: Maybe<Preference>;
    Project?: Maybe<Project>;
    Projects?: Maybe<Projects>;
    Testimonial?: Maybe<Testimonial>;
    TestimonialListing?: Maybe<TestimonialListing>;
    Testimonials?: Maybe<Testimonials>;
    Tool?: Maybe<Tool>;
    ToolboxListing?: Maybe<ToolboxListing>;
    Tools?: Maybe<Tools>;
    User?: Maybe<User>;
    Users?: Maybe<Users>;
    docAccessCaseStudyListing?: Maybe<Case_Study_ListingDocAccess>;
    docAccessHero?: Maybe<HeroesDocAccess>;
    docAccessIcon?: Maybe<IconsDocAccess>;
    docAccessImage?: Maybe<ImagesDocAccess>;
    docAccessNav?: Maybe<NavDocAccess>;
    docAccessPage?: Maybe<PagesDocAccess>;
    docAccessProject?: Maybe<ProjectsDocAccess>;
    docAccessTestimonial?: Maybe<TestimonialsDocAccess>;
    docAccessTestimonialListing?: Maybe<Testimonial_ListingDocAccess>;
    docAccessTool?: Maybe<ToolsDocAccess>;
    docAccessToolboxListing?: Maybe<Toolbox_ListingDocAccess>;
    docAccessUser?: Maybe<UsersDocAccess>;
    initializedUser?: Maybe<Scalars['Boolean']['output']>;
    meUser?: Maybe<UsersMe>;
};

export type QueryCaseStudyListingArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryHeroArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type QueryHeroesArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Scalars['String']['input']>;
    where?: InputMaybe<Hero_Where>;
};

export type QueryIconArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type QueryIconsArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Scalars['String']['input']>;
    where?: InputMaybe<Icon_Where>;
};

export type QueryImageArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type QueryImagesArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Scalars['String']['input']>;
    where?: InputMaybe<Image_Where>;
};

export type QueryNavArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryPageArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type QueryPagesArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Scalars['String']['input']>;
    where?: InputMaybe<Page_Where>;
};

export type QueryPreferenceArgs = {
    key?: InputMaybe<Scalars['String']['input']>;
};

export type QueryProjectArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type QueryProjectsArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Scalars['String']['input']>;
    where?: InputMaybe<Project_Where>;
};

export type QueryTestimonialArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type QueryTestimonialListingArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryTestimonialsArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Scalars['String']['input']>;
    where?: InputMaybe<Testimonial_Where>;
};

export type QueryToolArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type QueryToolboxListingArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryToolsArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Scalars['String']['input']>;
    where?: InputMaybe<Tool_Where>;
};

export type QueryUserArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type QueryUsersArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Scalars['String']['input']>;
    where?: InputMaybe<User_Where>;
};

export type QueryDocAccessHeroArgs = {
    id: Scalars['String']['input'];
};

export type QueryDocAccessIconArgs = {
    id: Scalars['String']['input'];
};

export type QueryDocAccessImageArgs = {
    id: Scalars['String']['input'];
};

export type QueryDocAccessPageArgs = {
    id: Scalars['String']['input'];
};

export type QueryDocAccessProjectArgs = {
    id: Scalars['String']['input'];
};

export type QueryDocAccessTestimonialArgs = {
    id: Scalars['String']['input'];
};

export type QueryDocAccessToolArgs = {
    id: Scalars['String']['input'];
};

export type QueryDocAccessUserArgs = {
    id: Scalars['String']['input'];
};

export type Testimonial = {
    __typename?: 'Testimonial';
    author: Scalars['String']['output'];
    company: Scalars['String']['output'];
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    excerpt?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    image: Image;
    jobTitle: Scalars['String']['output'];
    linkedin?: Maybe<Scalars['String']['output']>;
    testimonial: Scalars['JSON']['output'];
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TestimonialImageArgs = {
    where?: InputMaybe<Testimonial_Image_Where>;
};

export type TestimonialTestimonialArgs = {
    depth?: InputMaybe<Scalars['Int']['input']>;
};

export type TestimonialListing = {
    __typename?: 'TestimonialListing';
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    icon?: Maybe<Icon>;
    title?: Maybe<Scalars['String']['output']>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TestimonialListingIconArgs = {
    where?: InputMaybe<TestimonialListing_Icon_Where>;
};

export type TestimonialListingDocAccessFields = {
    __typename?: 'TestimonialListingDocAccessFields';
    createdAt?: Maybe<TestimonialListingDocAccessFields_CreatedAt>;
    icon?: Maybe<TestimonialListingDocAccessFields_Icon>;
    title?: Maybe<TestimonialListingDocAccessFields_Title>;
    updatedAt?: Maybe<TestimonialListingDocAccessFields_UpdatedAt>;
};

export type TestimonialListingDocAccessFields_CreatedAt = {
    __typename?: 'TestimonialListingDocAccessFields_createdAt';
    create?: Maybe<TestimonialListingDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<TestimonialListingDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<TestimonialListingDocAccessFields_CreatedAt_Read>;
    update?: Maybe<TestimonialListingDocAccessFields_CreatedAt_Update>;
};

export type TestimonialListingDocAccessFields_CreatedAt_Create = {
    __typename?: 'TestimonialListingDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingDocAccessFields_CreatedAt_Delete = {
    __typename?: 'TestimonialListingDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingDocAccessFields_CreatedAt_Read = {
    __typename?: 'TestimonialListingDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingDocAccessFields_CreatedAt_Update = {
    __typename?: 'TestimonialListingDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingDocAccessFields_Icon = {
    __typename?: 'TestimonialListingDocAccessFields_icon';
    create?: Maybe<TestimonialListingDocAccessFields_Icon_Create>;
    delete?: Maybe<TestimonialListingDocAccessFields_Icon_Delete>;
    read?: Maybe<TestimonialListingDocAccessFields_Icon_Read>;
    update?: Maybe<TestimonialListingDocAccessFields_Icon_Update>;
};

export type TestimonialListingDocAccessFields_Icon_Create = {
    __typename?: 'TestimonialListingDocAccessFields_icon_Create';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingDocAccessFields_Icon_Delete = {
    __typename?: 'TestimonialListingDocAccessFields_icon_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingDocAccessFields_Icon_Read = {
    __typename?: 'TestimonialListingDocAccessFields_icon_Read';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingDocAccessFields_Icon_Update = {
    __typename?: 'TestimonialListingDocAccessFields_icon_Update';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingDocAccessFields_Title = {
    __typename?: 'TestimonialListingDocAccessFields_title';
    create?: Maybe<TestimonialListingDocAccessFields_Title_Create>;
    delete?: Maybe<TestimonialListingDocAccessFields_Title_Delete>;
    read?: Maybe<TestimonialListingDocAccessFields_Title_Read>;
    update?: Maybe<TestimonialListingDocAccessFields_Title_Update>;
};

export type TestimonialListingDocAccessFields_Title_Create = {
    __typename?: 'TestimonialListingDocAccessFields_title_Create';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingDocAccessFields_Title_Delete = {
    __typename?: 'TestimonialListingDocAccessFields_title_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingDocAccessFields_Title_Read = {
    __typename?: 'TestimonialListingDocAccessFields_title_Read';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingDocAccessFields_Title_Update = {
    __typename?: 'TestimonialListingDocAccessFields_title_Update';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingDocAccessFields_UpdatedAt = {
    __typename?: 'TestimonialListingDocAccessFields_updatedAt';
    create?: Maybe<TestimonialListingDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<TestimonialListingDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<TestimonialListingDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<TestimonialListingDocAccessFields_UpdatedAt_Update>;
};

export type TestimonialListingDocAccessFields_UpdatedAt_Create = {
    __typename?: 'TestimonialListingDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'TestimonialListingDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingDocAccessFields_UpdatedAt_Read = {
    __typename?: 'TestimonialListingDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingDocAccessFields_UpdatedAt_Update = {
    __typename?: 'TestimonialListingDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingFields = {
    __typename?: 'TestimonialListingFields';
    createdAt?: Maybe<TestimonialListingFields_CreatedAt>;
    icon?: Maybe<TestimonialListingFields_Icon>;
    title?: Maybe<TestimonialListingFields_Title>;
    updatedAt?: Maybe<TestimonialListingFields_UpdatedAt>;
};

export type TestimonialListingFields_CreatedAt = {
    __typename?: 'TestimonialListingFields_createdAt';
    create?: Maybe<TestimonialListingFields_CreatedAt_Create>;
    delete?: Maybe<TestimonialListingFields_CreatedAt_Delete>;
    read?: Maybe<TestimonialListingFields_CreatedAt_Read>;
    update?: Maybe<TestimonialListingFields_CreatedAt_Update>;
};

export type TestimonialListingFields_CreatedAt_Create = {
    __typename?: 'TestimonialListingFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingFields_CreatedAt_Delete = {
    __typename?: 'TestimonialListingFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingFields_CreatedAt_Read = {
    __typename?: 'TestimonialListingFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingFields_CreatedAt_Update = {
    __typename?: 'TestimonialListingFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingFields_Icon = {
    __typename?: 'TestimonialListingFields_icon';
    create?: Maybe<TestimonialListingFields_Icon_Create>;
    delete?: Maybe<TestimonialListingFields_Icon_Delete>;
    read?: Maybe<TestimonialListingFields_Icon_Read>;
    update?: Maybe<TestimonialListingFields_Icon_Update>;
};

export type TestimonialListingFields_Icon_Create = {
    __typename?: 'TestimonialListingFields_icon_Create';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingFields_Icon_Delete = {
    __typename?: 'TestimonialListingFields_icon_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingFields_Icon_Read = {
    __typename?: 'TestimonialListingFields_icon_Read';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingFields_Icon_Update = {
    __typename?: 'TestimonialListingFields_icon_Update';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingFields_Title = {
    __typename?: 'TestimonialListingFields_title';
    create?: Maybe<TestimonialListingFields_Title_Create>;
    delete?: Maybe<TestimonialListingFields_Title_Delete>;
    read?: Maybe<TestimonialListingFields_Title_Read>;
    update?: Maybe<TestimonialListingFields_Title_Update>;
};

export type TestimonialListingFields_Title_Create = {
    __typename?: 'TestimonialListingFields_title_Create';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingFields_Title_Delete = {
    __typename?: 'TestimonialListingFields_title_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingFields_Title_Read = {
    __typename?: 'TestimonialListingFields_title_Read';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingFields_Title_Update = {
    __typename?: 'TestimonialListingFields_title_Update';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingFields_UpdatedAt = {
    __typename?: 'TestimonialListingFields_updatedAt';
    create?: Maybe<TestimonialListingFields_UpdatedAt_Create>;
    delete?: Maybe<TestimonialListingFields_UpdatedAt_Delete>;
    read?: Maybe<TestimonialListingFields_UpdatedAt_Read>;
    update?: Maybe<TestimonialListingFields_UpdatedAt_Update>;
};

export type TestimonialListingFields_UpdatedAt_Create = {
    __typename?: 'TestimonialListingFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingFields_UpdatedAt_Delete = {
    __typename?: 'TestimonialListingFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingFields_UpdatedAt_Read = {
    __typename?: 'TestimonialListingFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingFields_UpdatedAt_Update = {
    __typename?: 'TestimonialListingFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingReadAccess = {
    __typename?: 'TestimonialListingReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TestimonialListingReadDocAccess = {
    __typename?: 'TestimonialListingReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TestimonialListingUpdateAccess = {
    __typename?: 'TestimonialListingUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TestimonialListingUpdateDocAccess = {
    __typename?: 'TestimonialListingUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TestimonialListing_Icon_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TestimonialListing_Icon_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TestimonialListing_Icon_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TestimonialListing_Icon_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type TestimonialListing_Icon_Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type TestimonialListing_Icon_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TestimonialListing_Icon_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TestimonialListing_Icon_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TestimonialListing_Icon_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type TestimonialListing_Icon_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type TestimonialListing_Icon_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TestimonialListing_Icon_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TestimonialListing_Icon_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type TestimonialListing_Icon_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TestimonialListing_Icon_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TestimonialListing_Icon_Where = {
    AND?: InputMaybe<Array<InputMaybe<TestimonialListing_Icon_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<TestimonialListing_Icon_Where_Or>>>;
    alt?: InputMaybe<TestimonialListing_Icon_Alt_Operator>;
    createdAt?: InputMaybe<TestimonialListing_Icon_CreatedAt_Operator>;
    filename?: InputMaybe<TestimonialListing_Icon_Filename_Operator>;
    filesize?: InputMaybe<TestimonialListing_Icon_Filesize_Operator>;
    height?: InputMaybe<TestimonialListing_Icon_Height_Operator>;
    id?: InputMaybe<TestimonialListing_Icon_Id_Operator>;
    mimeType?: InputMaybe<TestimonialListing_Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<TestimonialListing_Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<TestimonialListing_Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<TestimonialListing_Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<TestimonialListing_Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<TestimonialListing_Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<TestimonialListing_Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<TestimonialListing_Icon_UpdatedAt_Operator>;
    url?: InputMaybe<TestimonialListing_Icon_Url_Operator>;
    width?: InputMaybe<TestimonialListing_Icon_Width_Operator>;
};

export type TestimonialListing_Icon_Where_And = {
    alt?: InputMaybe<TestimonialListing_Icon_Alt_Operator>;
    createdAt?: InputMaybe<TestimonialListing_Icon_CreatedAt_Operator>;
    filename?: InputMaybe<TestimonialListing_Icon_Filename_Operator>;
    filesize?: InputMaybe<TestimonialListing_Icon_Filesize_Operator>;
    height?: InputMaybe<TestimonialListing_Icon_Height_Operator>;
    id?: InputMaybe<TestimonialListing_Icon_Id_Operator>;
    mimeType?: InputMaybe<TestimonialListing_Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<TestimonialListing_Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<TestimonialListing_Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<TestimonialListing_Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<TestimonialListing_Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<TestimonialListing_Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<TestimonialListing_Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<TestimonialListing_Icon_UpdatedAt_Operator>;
    url?: InputMaybe<TestimonialListing_Icon_Url_Operator>;
    width?: InputMaybe<TestimonialListing_Icon_Width_Operator>;
};

export type TestimonialListing_Icon_Where_Or = {
    alt?: InputMaybe<TestimonialListing_Icon_Alt_Operator>;
    createdAt?: InputMaybe<TestimonialListing_Icon_CreatedAt_Operator>;
    filename?: InputMaybe<TestimonialListing_Icon_Filename_Operator>;
    filesize?: InputMaybe<TestimonialListing_Icon_Filesize_Operator>;
    height?: InputMaybe<TestimonialListing_Icon_Height_Operator>;
    id?: InputMaybe<TestimonialListing_Icon_Id_Operator>;
    mimeType?: InputMaybe<TestimonialListing_Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<TestimonialListing_Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<TestimonialListing_Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<TestimonialListing_Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<TestimonialListing_Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<TestimonialListing_Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<TestimonialListing_Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<TestimonialListing_Icon_UpdatedAt_Operator>;
    url?: InputMaybe<TestimonialListing_Icon_Url_Operator>;
    width?: InputMaybe<TestimonialListing_Icon_Width_Operator>;
};

export type TestimonialListing_Icon_Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Testimonial_Image_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Testimonial_Image_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Testimonial_Image_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Testimonial_Image_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Testimonial_Image_Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Testimonial_Image_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Testimonial_Image_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Testimonial_Image_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Testimonial_Image_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Testimonial_Image_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Testimonial_Image_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Testimonial_Image_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Testimonial_Image_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Testimonial_Image_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Testimonial_Image_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Testimonial_Image_Where = {
    AND?: InputMaybe<Array<InputMaybe<Testimonial_Image_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<Testimonial_Image_Where_Or>>>;
    alt?: InputMaybe<Testimonial_Image_Alt_Operator>;
    createdAt?: InputMaybe<Testimonial_Image_CreatedAt_Operator>;
    filename?: InputMaybe<Testimonial_Image_Filename_Operator>;
    filesize?: InputMaybe<Testimonial_Image_Filesize_Operator>;
    height?: InputMaybe<Testimonial_Image_Height_Operator>;
    id?: InputMaybe<Testimonial_Image_Id_Operator>;
    mimeType?: InputMaybe<Testimonial_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Testimonial_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Testimonial_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Testimonial_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Testimonial_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Testimonial_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Testimonial_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Testimonial_Image_UpdatedAt_Operator>;
    url?: InputMaybe<Testimonial_Image_Url_Operator>;
    width?: InputMaybe<Testimonial_Image_Width_Operator>;
};

export type Testimonial_Image_Where_And = {
    alt?: InputMaybe<Testimonial_Image_Alt_Operator>;
    createdAt?: InputMaybe<Testimonial_Image_CreatedAt_Operator>;
    filename?: InputMaybe<Testimonial_Image_Filename_Operator>;
    filesize?: InputMaybe<Testimonial_Image_Filesize_Operator>;
    height?: InputMaybe<Testimonial_Image_Height_Operator>;
    id?: InputMaybe<Testimonial_Image_Id_Operator>;
    mimeType?: InputMaybe<Testimonial_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Testimonial_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Testimonial_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Testimonial_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Testimonial_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Testimonial_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Testimonial_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Testimonial_Image_UpdatedAt_Operator>;
    url?: InputMaybe<Testimonial_Image_Url_Operator>;
    width?: InputMaybe<Testimonial_Image_Width_Operator>;
};

export type Testimonial_Image_Where_Or = {
    alt?: InputMaybe<Testimonial_Image_Alt_Operator>;
    createdAt?: InputMaybe<Testimonial_Image_CreatedAt_Operator>;
    filename?: InputMaybe<Testimonial_Image_Filename_Operator>;
    filesize?: InputMaybe<Testimonial_Image_Filesize_Operator>;
    height?: InputMaybe<Testimonial_Image_Height_Operator>;
    id?: InputMaybe<Testimonial_Image_Id_Operator>;
    mimeType?: InputMaybe<Testimonial_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Testimonial_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Testimonial_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Testimonial_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Testimonial_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Testimonial_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Testimonial_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Testimonial_Image_UpdatedAt_Operator>;
    url?: InputMaybe<Testimonial_Image_Url_Operator>;
    width?: InputMaybe<Testimonial_Image_Width_Operator>;
};

export type Testimonial_Image_Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Testimonial_Author_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Testimonial_Company_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Testimonial_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Testimonial_Excerpt_Operator = {
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Testimonial_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Testimonial_Image_Operator = {
    equals?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Testimonial_JobTitle_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Testimonial_Linkedin_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Testimonial_Testimonial_Operator = {
    contains?: InputMaybe<Scalars['JSON']['input']>;
    equals?: InputMaybe<Scalars['JSON']['input']>;
    like?: InputMaybe<Scalars['JSON']['input']>;
    not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type Testimonial_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Testimonial_Where = {
    AND?: InputMaybe<Array<InputMaybe<Testimonial_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<Testimonial_Where_Or>>>;
    author?: InputMaybe<Testimonial_Author_Operator>;
    company?: InputMaybe<Testimonial_Company_Operator>;
    createdAt?: InputMaybe<Testimonial_CreatedAt_Operator>;
    excerpt?: InputMaybe<Testimonial_Excerpt_Operator>;
    id?: InputMaybe<Testimonial_Id_Operator>;
    image?: InputMaybe<Testimonial_Image_Operator>;
    jobTitle?: InputMaybe<Testimonial_JobTitle_Operator>;
    linkedin?: InputMaybe<Testimonial_Linkedin_Operator>;
    testimonial?: InputMaybe<Testimonial_Testimonial_Operator>;
    updatedAt?: InputMaybe<Testimonial_UpdatedAt_Operator>;
};

export type Testimonial_Where_And = {
    author?: InputMaybe<Testimonial_Author_Operator>;
    company?: InputMaybe<Testimonial_Company_Operator>;
    createdAt?: InputMaybe<Testimonial_CreatedAt_Operator>;
    excerpt?: InputMaybe<Testimonial_Excerpt_Operator>;
    id?: InputMaybe<Testimonial_Id_Operator>;
    image?: InputMaybe<Testimonial_Image_Operator>;
    jobTitle?: InputMaybe<Testimonial_JobTitle_Operator>;
    linkedin?: InputMaybe<Testimonial_Linkedin_Operator>;
    testimonial?: InputMaybe<Testimonial_Testimonial_Operator>;
    updatedAt?: InputMaybe<Testimonial_UpdatedAt_Operator>;
};

export type Testimonial_Where_Or = {
    author?: InputMaybe<Testimonial_Author_Operator>;
    company?: InputMaybe<Testimonial_Company_Operator>;
    createdAt?: InputMaybe<Testimonial_CreatedAt_Operator>;
    excerpt?: InputMaybe<Testimonial_Excerpt_Operator>;
    id?: InputMaybe<Testimonial_Id_Operator>;
    image?: InputMaybe<Testimonial_Image_Operator>;
    jobTitle?: InputMaybe<Testimonial_JobTitle_Operator>;
    linkedin?: InputMaybe<Testimonial_Linkedin_Operator>;
    testimonial?: InputMaybe<Testimonial_Testimonial_Operator>;
    updatedAt?: InputMaybe<Testimonial_UpdatedAt_Operator>;
};

export type Testimonials = {
    __typename?: 'Testimonials';
    docs?: Maybe<Array<Maybe<Testimonial>>>;
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
    hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
    limit?: Maybe<Scalars['Int']['output']>;
    nextPage?: Maybe<Scalars['Int']['output']>;
    offset?: Maybe<Scalars['Int']['output']>;
    page?: Maybe<Scalars['Int']['output']>;
    pagingCounter?: Maybe<Scalars['Int']['output']>;
    prevPage?: Maybe<Scalars['Int']['output']>;
    totalDocs?: Maybe<Scalars['Int']['output']>;
    totalPages?: Maybe<Scalars['Int']['output']>;
};

export type TestimonialsCreateAccess = {
    __typename?: 'TestimonialsCreateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TestimonialsCreateDocAccess = {
    __typename?: 'TestimonialsCreateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TestimonialsDeleteAccess = {
    __typename?: 'TestimonialsDeleteAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TestimonialsDeleteDocAccess = {
    __typename?: 'TestimonialsDeleteDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TestimonialsDocAccessFields = {
    __typename?: 'TestimonialsDocAccessFields';
    author?: Maybe<TestimonialsDocAccessFields_Author>;
    company?: Maybe<TestimonialsDocAccessFields_Company>;
    createdAt?: Maybe<TestimonialsDocAccessFields_CreatedAt>;
    excerpt?: Maybe<TestimonialsDocAccessFields_Excerpt>;
    image?: Maybe<TestimonialsDocAccessFields_Image>;
    jobTitle?: Maybe<TestimonialsDocAccessFields_JobTitle>;
    linkedin?: Maybe<TestimonialsDocAccessFields_Linkedin>;
    testimonial?: Maybe<TestimonialsDocAccessFields_Testimonial>;
    updatedAt?: Maybe<TestimonialsDocAccessFields_UpdatedAt>;
};

export type TestimonialsDocAccessFields_Author = {
    __typename?: 'TestimonialsDocAccessFields_author';
    create?: Maybe<TestimonialsDocAccessFields_Author_Create>;
    delete?: Maybe<TestimonialsDocAccessFields_Author_Delete>;
    read?: Maybe<TestimonialsDocAccessFields_Author_Read>;
    update?: Maybe<TestimonialsDocAccessFields_Author_Update>;
};

export type TestimonialsDocAccessFields_Author_Create = {
    __typename?: 'TestimonialsDocAccessFields_author_Create';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_Author_Delete = {
    __typename?: 'TestimonialsDocAccessFields_author_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_Author_Read = {
    __typename?: 'TestimonialsDocAccessFields_author_Read';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_Author_Update = {
    __typename?: 'TestimonialsDocAccessFields_author_Update';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_Company = {
    __typename?: 'TestimonialsDocAccessFields_company';
    create?: Maybe<TestimonialsDocAccessFields_Company_Create>;
    delete?: Maybe<TestimonialsDocAccessFields_Company_Delete>;
    read?: Maybe<TestimonialsDocAccessFields_Company_Read>;
    update?: Maybe<TestimonialsDocAccessFields_Company_Update>;
};

export type TestimonialsDocAccessFields_Company_Create = {
    __typename?: 'TestimonialsDocAccessFields_company_Create';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_Company_Delete = {
    __typename?: 'TestimonialsDocAccessFields_company_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_Company_Read = {
    __typename?: 'TestimonialsDocAccessFields_company_Read';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_Company_Update = {
    __typename?: 'TestimonialsDocAccessFields_company_Update';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_CreatedAt = {
    __typename?: 'TestimonialsDocAccessFields_createdAt';
    create?: Maybe<TestimonialsDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<TestimonialsDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<TestimonialsDocAccessFields_CreatedAt_Read>;
    update?: Maybe<TestimonialsDocAccessFields_CreatedAt_Update>;
};

export type TestimonialsDocAccessFields_CreatedAt_Create = {
    __typename?: 'TestimonialsDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_CreatedAt_Delete = {
    __typename?: 'TestimonialsDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_CreatedAt_Read = {
    __typename?: 'TestimonialsDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_CreatedAt_Update = {
    __typename?: 'TestimonialsDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_Excerpt = {
    __typename?: 'TestimonialsDocAccessFields_excerpt';
    create?: Maybe<TestimonialsDocAccessFields_Excerpt_Create>;
    delete?: Maybe<TestimonialsDocAccessFields_Excerpt_Delete>;
    read?: Maybe<TestimonialsDocAccessFields_Excerpt_Read>;
    update?: Maybe<TestimonialsDocAccessFields_Excerpt_Update>;
};

export type TestimonialsDocAccessFields_Excerpt_Create = {
    __typename?: 'TestimonialsDocAccessFields_excerpt_Create';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_Excerpt_Delete = {
    __typename?: 'TestimonialsDocAccessFields_excerpt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_Excerpt_Read = {
    __typename?: 'TestimonialsDocAccessFields_excerpt_Read';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_Excerpt_Update = {
    __typename?: 'TestimonialsDocAccessFields_excerpt_Update';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_Image = {
    __typename?: 'TestimonialsDocAccessFields_image';
    create?: Maybe<TestimonialsDocAccessFields_Image_Create>;
    delete?: Maybe<TestimonialsDocAccessFields_Image_Delete>;
    read?: Maybe<TestimonialsDocAccessFields_Image_Read>;
    update?: Maybe<TestimonialsDocAccessFields_Image_Update>;
};

export type TestimonialsDocAccessFields_Image_Create = {
    __typename?: 'TestimonialsDocAccessFields_image_Create';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_Image_Delete = {
    __typename?: 'TestimonialsDocAccessFields_image_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_Image_Read = {
    __typename?: 'TestimonialsDocAccessFields_image_Read';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_Image_Update = {
    __typename?: 'TestimonialsDocAccessFields_image_Update';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_JobTitle = {
    __typename?: 'TestimonialsDocAccessFields_jobTitle';
    create?: Maybe<TestimonialsDocAccessFields_JobTitle_Create>;
    delete?: Maybe<TestimonialsDocAccessFields_JobTitle_Delete>;
    read?: Maybe<TestimonialsDocAccessFields_JobTitle_Read>;
    update?: Maybe<TestimonialsDocAccessFields_JobTitle_Update>;
};

export type TestimonialsDocAccessFields_JobTitle_Create = {
    __typename?: 'TestimonialsDocAccessFields_jobTitle_Create';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_JobTitle_Delete = {
    __typename?: 'TestimonialsDocAccessFields_jobTitle_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_JobTitle_Read = {
    __typename?: 'TestimonialsDocAccessFields_jobTitle_Read';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_JobTitle_Update = {
    __typename?: 'TestimonialsDocAccessFields_jobTitle_Update';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_Linkedin = {
    __typename?: 'TestimonialsDocAccessFields_linkedin';
    create?: Maybe<TestimonialsDocAccessFields_Linkedin_Create>;
    delete?: Maybe<TestimonialsDocAccessFields_Linkedin_Delete>;
    read?: Maybe<TestimonialsDocAccessFields_Linkedin_Read>;
    update?: Maybe<TestimonialsDocAccessFields_Linkedin_Update>;
};

export type TestimonialsDocAccessFields_Linkedin_Create = {
    __typename?: 'TestimonialsDocAccessFields_linkedin_Create';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_Linkedin_Delete = {
    __typename?: 'TestimonialsDocAccessFields_linkedin_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_Linkedin_Read = {
    __typename?: 'TestimonialsDocAccessFields_linkedin_Read';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_Linkedin_Update = {
    __typename?: 'TestimonialsDocAccessFields_linkedin_Update';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_Testimonial = {
    __typename?: 'TestimonialsDocAccessFields_testimonial';
    create?: Maybe<TestimonialsDocAccessFields_Testimonial_Create>;
    delete?: Maybe<TestimonialsDocAccessFields_Testimonial_Delete>;
    read?: Maybe<TestimonialsDocAccessFields_Testimonial_Read>;
    update?: Maybe<TestimonialsDocAccessFields_Testimonial_Update>;
};

export type TestimonialsDocAccessFields_Testimonial_Create = {
    __typename?: 'TestimonialsDocAccessFields_testimonial_Create';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_Testimonial_Delete = {
    __typename?: 'TestimonialsDocAccessFields_testimonial_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_Testimonial_Read = {
    __typename?: 'TestimonialsDocAccessFields_testimonial_Read';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_Testimonial_Update = {
    __typename?: 'TestimonialsDocAccessFields_testimonial_Update';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_UpdatedAt = {
    __typename?: 'TestimonialsDocAccessFields_updatedAt';
    create?: Maybe<TestimonialsDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<TestimonialsDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<TestimonialsDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<TestimonialsDocAccessFields_UpdatedAt_Update>;
};

export type TestimonialsDocAccessFields_UpdatedAt_Create = {
    __typename?: 'TestimonialsDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'TestimonialsDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_UpdatedAt_Read = {
    __typename?: 'TestimonialsDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsDocAccessFields_UpdatedAt_Update = {
    __typename?: 'TestimonialsDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields = {
    __typename?: 'TestimonialsFields';
    author?: Maybe<TestimonialsFields_Author>;
    company?: Maybe<TestimonialsFields_Company>;
    createdAt?: Maybe<TestimonialsFields_CreatedAt>;
    excerpt?: Maybe<TestimonialsFields_Excerpt>;
    image?: Maybe<TestimonialsFields_Image>;
    jobTitle?: Maybe<TestimonialsFields_JobTitle>;
    linkedin?: Maybe<TestimonialsFields_Linkedin>;
    testimonial?: Maybe<TestimonialsFields_Testimonial>;
    updatedAt?: Maybe<TestimonialsFields_UpdatedAt>;
};

export type TestimonialsFields_Author = {
    __typename?: 'TestimonialsFields_author';
    create?: Maybe<TestimonialsFields_Author_Create>;
    delete?: Maybe<TestimonialsFields_Author_Delete>;
    read?: Maybe<TestimonialsFields_Author_Read>;
    update?: Maybe<TestimonialsFields_Author_Update>;
};

export type TestimonialsFields_Author_Create = {
    __typename?: 'TestimonialsFields_author_Create';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_Author_Delete = {
    __typename?: 'TestimonialsFields_author_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_Author_Read = {
    __typename?: 'TestimonialsFields_author_Read';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_Author_Update = {
    __typename?: 'TestimonialsFields_author_Update';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_Company = {
    __typename?: 'TestimonialsFields_company';
    create?: Maybe<TestimonialsFields_Company_Create>;
    delete?: Maybe<TestimonialsFields_Company_Delete>;
    read?: Maybe<TestimonialsFields_Company_Read>;
    update?: Maybe<TestimonialsFields_Company_Update>;
};

export type TestimonialsFields_Company_Create = {
    __typename?: 'TestimonialsFields_company_Create';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_Company_Delete = {
    __typename?: 'TestimonialsFields_company_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_Company_Read = {
    __typename?: 'TestimonialsFields_company_Read';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_Company_Update = {
    __typename?: 'TestimonialsFields_company_Update';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_CreatedAt = {
    __typename?: 'TestimonialsFields_createdAt';
    create?: Maybe<TestimonialsFields_CreatedAt_Create>;
    delete?: Maybe<TestimonialsFields_CreatedAt_Delete>;
    read?: Maybe<TestimonialsFields_CreatedAt_Read>;
    update?: Maybe<TestimonialsFields_CreatedAt_Update>;
};

export type TestimonialsFields_CreatedAt_Create = {
    __typename?: 'TestimonialsFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_CreatedAt_Delete = {
    __typename?: 'TestimonialsFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_CreatedAt_Read = {
    __typename?: 'TestimonialsFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_CreatedAt_Update = {
    __typename?: 'TestimonialsFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_Excerpt = {
    __typename?: 'TestimonialsFields_excerpt';
    create?: Maybe<TestimonialsFields_Excerpt_Create>;
    delete?: Maybe<TestimonialsFields_Excerpt_Delete>;
    read?: Maybe<TestimonialsFields_Excerpt_Read>;
    update?: Maybe<TestimonialsFields_Excerpt_Update>;
};

export type TestimonialsFields_Excerpt_Create = {
    __typename?: 'TestimonialsFields_excerpt_Create';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_Excerpt_Delete = {
    __typename?: 'TestimonialsFields_excerpt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_Excerpt_Read = {
    __typename?: 'TestimonialsFields_excerpt_Read';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_Excerpt_Update = {
    __typename?: 'TestimonialsFields_excerpt_Update';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_Image = {
    __typename?: 'TestimonialsFields_image';
    create?: Maybe<TestimonialsFields_Image_Create>;
    delete?: Maybe<TestimonialsFields_Image_Delete>;
    read?: Maybe<TestimonialsFields_Image_Read>;
    update?: Maybe<TestimonialsFields_Image_Update>;
};

export type TestimonialsFields_Image_Create = {
    __typename?: 'TestimonialsFields_image_Create';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_Image_Delete = {
    __typename?: 'TestimonialsFields_image_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_Image_Read = {
    __typename?: 'TestimonialsFields_image_Read';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_Image_Update = {
    __typename?: 'TestimonialsFields_image_Update';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_JobTitle = {
    __typename?: 'TestimonialsFields_jobTitle';
    create?: Maybe<TestimonialsFields_JobTitle_Create>;
    delete?: Maybe<TestimonialsFields_JobTitle_Delete>;
    read?: Maybe<TestimonialsFields_JobTitle_Read>;
    update?: Maybe<TestimonialsFields_JobTitle_Update>;
};

export type TestimonialsFields_JobTitle_Create = {
    __typename?: 'TestimonialsFields_jobTitle_Create';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_JobTitle_Delete = {
    __typename?: 'TestimonialsFields_jobTitle_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_JobTitle_Read = {
    __typename?: 'TestimonialsFields_jobTitle_Read';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_JobTitle_Update = {
    __typename?: 'TestimonialsFields_jobTitle_Update';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_Linkedin = {
    __typename?: 'TestimonialsFields_linkedin';
    create?: Maybe<TestimonialsFields_Linkedin_Create>;
    delete?: Maybe<TestimonialsFields_Linkedin_Delete>;
    read?: Maybe<TestimonialsFields_Linkedin_Read>;
    update?: Maybe<TestimonialsFields_Linkedin_Update>;
};

export type TestimonialsFields_Linkedin_Create = {
    __typename?: 'TestimonialsFields_linkedin_Create';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_Linkedin_Delete = {
    __typename?: 'TestimonialsFields_linkedin_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_Linkedin_Read = {
    __typename?: 'TestimonialsFields_linkedin_Read';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_Linkedin_Update = {
    __typename?: 'TestimonialsFields_linkedin_Update';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_Testimonial = {
    __typename?: 'TestimonialsFields_testimonial';
    create?: Maybe<TestimonialsFields_Testimonial_Create>;
    delete?: Maybe<TestimonialsFields_Testimonial_Delete>;
    read?: Maybe<TestimonialsFields_Testimonial_Read>;
    update?: Maybe<TestimonialsFields_Testimonial_Update>;
};

export type TestimonialsFields_Testimonial_Create = {
    __typename?: 'TestimonialsFields_testimonial_Create';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_Testimonial_Delete = {
    __typename?: 'TestimonialsFields_testimonial_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_Testimonial_Read = {
    __typename?: 'TestimonialsFields_testimonial_Read';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_Testimonial_Update = {
    __typename?: 'TestimonialsFields_testimonial_Update';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_UpdatedAt = {
    __typename?: 'TestimonialsFields_updatedAt';
    create?: Maybe<TestimonialsFields_UpdatedAt_Create>;
    delete?: Maybe<TestimonialsFields_UpdatedAt_Delete>;
    read?: Maybe<TestimonialsFields_UpdatedAt_Read>;
    update?: Maybe<TestimonialsFields_UpdatedAt_Update>;
};

export type TestimonialsFields_UpdatedAt_Create = {
    __typename?: 'TestimonialsFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_UpdatedAt_Delete = {
    __typename?: 'TestimonialsFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_UpdatedAt_Read = {
    __typename?: 'TestimonialsFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsFields_UpdatedAt_Update = {
    __typename?: 'TestimonialsFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialsReadAccess = {
    __typename?: 'TestimonialsReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TestimonialsReadDocAccess = {
    __typename?: 'TestimonialsReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TestimonialsUpdateAccess = {
    __typename?: 'TestimonialsUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TestimonialsUpdateDocAccess = {
    __typename?: 'TestimonialsUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Tool = {
    __typename?: 'Tool';
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    icon: Icon;
    id?: Maybe<Scalars['String']['output']>;
    title: Scalars['String']['output'];
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ToolIconArgs = {
    where?: InputMaybe<Tool_Icon_Where>;
};

export type Tool_Icon_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Tool_Icon_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Tool_Icon_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Tool_Icon_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Tool_Icon_Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Tool_Icon_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Tool_Icon_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Tool_Icon_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Tool_Icon_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Tool_Icon_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Tool_Icon_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Tool_Icon_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Tool_Icon_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Tool_Icon_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Tool_Icon_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Tool_Icon_Where = {
    AND?: InputMaybe<Array<InputMaybe<Tool_Icon_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<Tool_Icon_Where_Or>>>;
    alt?: InputMaybe<Tool_Icon_Alt_Operator>;
    createdAt?: InputMaybe<Tool_Icon_CreatedAt_Operator>;
    filename?: InputMaybe<Tool_Icon_Filename_Operator>;
    filesize?: InputMaybe<Tool_Icon_Filesize_Operator>;
    height?: InputMaybe<Tool_Icon_Height_Operator>;
    id?: InputMaybe<Tool_Icon_Id_Operator>;
    mimeType?: InputMaybe<Tool_Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Tool_Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Tool_Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Tool_Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Tool_Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Tool_Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Tool_Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Tool_Icon_UpdatedAt_Operator>;
    url?: InputMaybe<Tool_Icon_Url_Operator>;
    width?: InputMaybe<Tool_Icon_Width_Operator>;
};

export type Tool_Icon_Where_And = {
    alt?: InputMaybe<Tool_Icon_Alt_Operator>;
    createdAt?: InputMaybe<Tool_Icon_CreatedAt_Operator>;
    filename?: InputMaybe<Tool_Icon_Filename_Operator>;
    filesize?: InputMaybe<Tool_Icon_Filesize_Operator>;
    height?: InputMaybe<Tool_Icon_Height_Operator>;
    id?: InputMaybe<Tool_Icon_Id_Operator>;
    mimeType?: InputMaybe<Tool_Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Tool_Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Tool_Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Tool_Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Tool_Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Tool_Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Tool_Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Tool_Icon_UpdatedAt_Operator>;
    url?: InputMaybe<Tool_Icon_Url_Operator>;
    width?: InputMaybe<Tool_Icon_Width_Operator>;
};

export type Tool_Icon_Where_Or = {
    alt?: InputMaybe<Tool_Icon_Alt_Operator>;
    createdAt?: InputMaybe<Tool_Icon_CreatedAt_Operator>;
    filename?: InputMaybe<Tool_Icon_Filename_Operator>;
    filesize?: InputMaybe<Tool_Icon_Filesize_Operator>;
    height?: InputMaybe<Tool_Icon_Height_Operator>;
    id?: InputMaybe<Tool_Icon_Id_Operator>;
    mimeType?: InputMaybe<Tool_Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Tool_Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Tool_Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Tool_Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Tool_Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Tool_Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Tool_Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Tool_Icon_UpdatedAt_Operator>;
    url?: InputMaybe<Tool_Icon_Url_Operator>;
    width?: InputMaybe<Tool_Icon_Width_Operator>;
};

export type Tool_Icon_Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Tool_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Tool_Icon_Operator = {
    equals?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Tool_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Tool_Title_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Tool_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Tool_Where = {
    AND?: InputMaybe<Array<InputMaybe<Tool_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<Tool_Where_Or>>>;
    createdAt?: InputMaybe<Tool_CreatedAt_Operator>;
    icon?: InputMaybe<Tool_Icon_Operator>;
    id?: InputMaybe<Tool_Id_Operator>;
    title?: InputMaybe<Tool_Title_Operator>;
    updatedAt?: InputMaybe<Tool_UpdatedAt_Operator>;
};

export type Tool_Where_And = {
    createdAt?: InputMaybe<Tool_CreatedAt_Operator>;
    icon?: InputMaybe<Tool_Icon_Operator>;
    id?: InputMaybe<Tool_Id_Operator>;
    title?: InputMaybe<Tool_Title_Operator>;
    updatedAt?: InputMaybe<Tool_UpdatedAt_Operator>;
};

export type Tool_Where_Or = {
    createdAt?: InputMaybe<Tool_CreatedAt_Operator>;
    icon?: InputMaybe<Tool_Icon_Operator>;
    id?: InputMaybe<Tool_Id_Operator>;
    title?: InputMaybe<Tool_Title_Operator>;
    updatedAt?: InputMaybe<Tool_UpdatedAt_Operator>;
};

export type ToolboxListing = {
    __typename?: 'ToolboxListing';
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    icon?: Maybe<Icon>;
    title?: Maybe<Scalars['String']['output']>;
    tools?: Maybe<Array<Tool>>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ToolboxListingIconArgs = {
    where?: InputMaybe<ToolboxListing_Icon_Where>;
};

export type ToolboxListingDocAccessFields = {
    __typename?: 'ToolboxListingDocAccessFields';
    createdAt?: Maybe<ToolboxListingDocAccessFields_CreatedAt>;
    icon?: Maybe<ToolboxListingDocAccessFields_Icon>;
    title?: Maybe<ToolboxListingDocAccessFields_Title>;
    tools?: Maybe<ToolboxListingDocAccessFields_Tools>;
    updatedAt?: Maybe<ToolboxListingDocAccessFields_UpdatedAt>;
};

export type ToolboxListingDocAccessFields_CreatedAt = {
    __typename?: 'ToolboxListingDocAccessFields_createdAt';
    create?: Maybe<ToolboxListingDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<ToolboxListingDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<ToolboxListingDocAccessFields_CreatedAt_Read>;
    update?: Maybe<ToolboxListingDocAccessFields_CreatedAt_Update>;
};

export type ToolboxListingDocAccessFields_CreatedAt_Create = {
    __typename?: 'ToolboxListingDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingDocAccessFields_CreatedAt_Delete = {
    __typename?: 'ToolboxListingDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingDocAccessFields_CreatedAt_Read = {
    __typename?: 'ToolboxListingDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingDocAccessFields_CreatedAt_Update = {
    __typename?: 'ToolboxListingDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingDocAccessFields_Icon = {
    __typename?: 'ToolboxListingDocAccessFields_icon';
    create?: Maybe<ToolboxListingDocAccessFields_Icon_Create>;
    delete?: Maybe<ToolboxListingDocAccessFields_Icon_Delete>;
    read?: Maybe<ToolboxListingDocAccessFields_Icon_Read>;
    update?: Maybe<ToolboxListingDocAccessFields_Icon_Update>;
};

export type ToolboxListingDocAccessFields_Icon_Create = {
    __typename?: 'ToolboxListingDocAccessFields_icon_Create';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingDocAccessFields_Icon_Delete = {
    __typename?: 'ToolboxListingDocAccessFields_icon_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingDocAccessFields_Icon_Read = {
    __typename?: 'ToolboxListingDocAccessFields_icon_Read';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingDocAccessFields_Icon_Update = {
    __typename?: 'ToolboxListingDocAccessFields_icon_Update';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingDocAccessFields_Title = {
    __typename?: 'ToolboxListingDocAccessFields_title';
    create?: Maybe<ToolboxListingDocAccessFields_Title_Create>;
    delete?: Maybe<ToolboxListingDocAccessFields_Title_Delete>;
    read?: Maybe<ToolboxListingDocAccessFields_Title_Read>;
    update?: Maybe<ToolboxListingDocAccessFields_Title_Update>;
};

export type ToolboxListingDocAccessFields_Title_Create = {
    __typename?: 'ToolboxListingDocAccessFields_title_Create';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingDocAccessFields_Title_Delete = {
    __typename?: 'ToolboxListingDocAccessFields_title_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingDocAccessFields_Title_Read = {
    __typename?: 'ToolboxListingDocAccessFields_title_Read';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingDocAccessFields_Title_Update = {
    __typename?: 'ToolboxListingDocAccessFields_title_Update';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingDocAccessFields_Tools = {
    __typename?: 'ToolboxListingDocAccessFields_tools';
    create?: Maybe<ToolboxListingDocAccessFields_Tools_Create>;
    delete?: Maybe<ToolboxListingDocAccessFields_Tools_Delete>;
    read?: Maybe<ToolboxListingDocAccessFields_Tools_Read>;
    update?: Maybe<ToolboxListingDocAccessFields_Tools_Update>;
};

export type ToolboxListingDocAccessFields_Tools_Create = {
    __typename?: 'ToolboxListingDocAccessFields_tools_Create';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingDocAccessFields_Tools_Delete = {
    __typename?: 'ToolboxListingDocAccessFields_tools_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingDocAccessFields_Tools_Read = {
    __typename?: 'ToolboxListingDocAccessFields_tools_Read';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingDocAccessFields_Tools_Update = {
    __typename?: 'ToolboxListingDocAccessFields_tools_Update';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingDocAccessFields_UpdatedAt = {
    __typename?: 'ToolboxListingDocAccessFields_updatedAt';
    create?: Maybe<ToolboxListingDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<ToolboxListingDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<ToolboxListingDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<ToolboxListingDocAccessFields_UpdatedAt_Update>;
};

export type ToolboxListingDocAccessFields_UpdatedAt_Create = {
    __typename?: 'ToolboxListingDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'ToolboxListingDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingDocAccessFields_UpdatedAt_Read = {
    __typename?: 'ToolboxListingDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingDocAccessFields_UpdatedAt_Update = {
    __typename?: 'ToolboxListingDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingFields = {
    __typename?: 'ToolboxListingFields';
    createdAt?: Maybe<ToolboxListingFields_CreatedAt>;
    icon?: Maybe<ToolboxListingFields_Icon>;
    title?: Maybe<ToolboxListingFields_Title>;
    tools?: Maybe<ToolboxListingFields_Tools>;
    updatedAt?: Maybe<ToolboxListingFields_UpdatedAt>;
};

export type ToolboxListingFields_CreatedAt = {
    __typename?: 'ToolboxListingFields_createdAt';
    create?: Maybe<ToolboxListingFields_CreatedAt_Create>;
    delete?: Maybe<ToolboxListingFields_CreatedAt_Delete>;
    read?: Maybe<ToolboxListingFields_CreatedAt_Read>;
    update?: Maybe<ToolboxListingFields_CreatedAt_Update>;
};

export type ToolboxListingFields_CreatedAt_Create = {
    __typename?: 'ToolboxListingFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingFields_CreatedAt_Delete = {
    __typename?: 'ToolboxListingFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingFields_CreatedAt_Read = {
    __typename?: 'ToolboxListingFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingFields_CreatedAt_Update = {
    __typename?: 'ToolboxListingFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingFields_Icon = {
    __typename?: 'ToolboxListingFields_icon';
    create?: Maybe<ToolboxListingFields_Icon_Create>;
    delete?: Maybe<ToolboxListingFields_Icon_Delete>;
    read?: Maybe<ToolboxListingFields_Icon_Read>;
    update?: Maybe<ToolboxListingFields_Icon_Update>;
};

export type ToolboxListingFields_Icon_Create = {
    __typename?: 'ToolboxListingFields_icon_Create';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingFields_Icon_Delete = {
    __typename?: 'ToolboxListingFields_icon_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingFields_Icon_Read = {
    __typename?: 'ToolboxListingFields_icon_Read';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingFields_Icon_Update = {
    __typename?: 'ToolboxListingFields_icon_Update';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingFields_Title = {
    __typename?: 'ToolboxListingFields_title';
    create?: Maybe<ToolboxListingFields_Title_Create>;
    delete?: Maybe<ToolboxListingFields_Title_Delete>;
    read?: Maybe<ToolboxListingFields_Title_Read>;
    update?: Maybe<ToolboxListingFields_Title_Update>;
};

export type ToolboxListingFields_Title_Create = {
    __typename?: 'ToolboxListingFields_title_Create';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingFields_Title_Delete = {
    __typename?: 'ToolboxListingFields_title_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingFields_Title_Read = {
    __typename?: 'ToolboxListingFields_title_Read';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingFields_Title_Update = {
    __typename?: 'ToolboxListingFields_title_Update';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingFields_Tools = {
    __typename?: 'ToolboxListingFields_tools';
    create?: Maybe<ToolboxListingFields_Tools_Create>;
    delete?: Maybe<ToolboxListingFields_Tools_Delete>;
    read?: Maybe<ToolboxListingFields_Tools_Read>;
    update?: Maybe<ToolboxListingFields_Tools_Update>;
};

export type ToolboxListingFields_Tools_Create = {
    __typename?: 'ToolboxListingFields_tools_Create';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingFields_Tools_Delete = {
    __typename?: 'ToolboxListingFields_tools_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingFields_Tools_Read = {
    __typename?: 'ToolboxListingFields_tools_Read';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingFields_Tools_Update = {
    __typename?: 'ToolboxListingFields_tools_Update';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingFields_UpdatedAt = {
    __typename?: 'ToolboxListingFields_updatedAt';
    create?: Maybe<ToolboxListingFields_UpdatedAt_Create>;
    delete?: Maybe<ToolboxListingFields_UpdatedAt_Delete>;
    read?: Maybe<ToolboxListingFields_UpdatedAt_Read>;
    update?: Maybe<ToolboxListingFields_UpdatedAt_Update>;
};

export type ToolboxListingFields_UpdatedAt_Create = {
    __typename?: 'ToolboxListingFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingFields_UpdatedAt_Delete = {
    __typename?: 'ToolboxListingFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingFields_UpdatedAt_Read = {
    __typename?: 'ToolboxListingFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingFields_UpdatedAt_Update = {
    __typename?: 'ToolboxListingFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingReadAccess = {
    __typename?: 'ToolboxListingReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ToolboxListingReadDocAccess = {
    __typename?: 'ToolboxListingReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ToolboxListingUpdateAccess = {
    __typename?: 'ToolboxListingUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ToolboxListingUpdateDocAccess = {
    __typename?: 'ToolboxListingUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ToolboxListing_Icon_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ToolboxListing_Icon_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ToolboxListing_Icon_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ToolboxListing_Icon_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type ToolboxListing_Icon_Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type ToolboxListing_Icon_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ToolboxListing_Icon_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ToolboxListing_Icon_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ToolboxListing_Icon_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type ToolboxListing_Icon_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type ToolboxListing_Icon_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ToolboxListing_Icon_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ToolboxListing_Icon_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type ToolboxListing_Icon_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ToolboxListing_Icon_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ToolboxListing_Icon_Where = {
    AND?: InputMaybe<Array<InputMaybe<ToolboxListing_Icon_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<ToolboxListing_Icon_Where_Or>>>;
    alt?: InputMaybe<ToolboxListing_Icon_Alt_Operator>;
    createdAt?: InputMaybe<ToolboxListing_Icon_CreatedAt_Operator>;
    filename?: InputMaybe<ToolboxListing_Icon_Filename_Operator>;
    filesize?: InputMaybe<ToolboxListing_Icon_Filesize_Operator>;
    height?: InputMaybe<ToolboxListing_Icon_Height_Operator>;
    id?: InputMaybe<ToolboxListing_Icon_Id_Operator>;
    mimeType?: InputMaybe<ToolboxListing_Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<ToolboxListing_Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<ToolboxListing_Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<ToolboxListing_Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<ToolboxListing_Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<ToolboxListing_Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<ToolboxListing_Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<ToolboxListing_Icon_UpdatedAt_Operator>;
    url?: InputMaybe<ToolboxListing_Icon_Url_Operator>;
    width?: InputMaybe<ToolboxListing_Icon_Width_Operator>;
};

export type ToolboxListing_Icon_Where_And = {
    alt?: InputMaybe<ToolboxListing_Icon_Alt_Operator>;
    createdAt?: InputMaybe<ToolboxListing_Icon_CreatedAt_Operator>;
    filename?: InputMaybe<ToolboxListing_Icon_Filename_Operator>;
    filesize?: InputMaybe<ToolboxListing_Icon_Filesize_Operator>;
    height?: InputMaybe<ToolboxListing_Icon_Height_Operator>;
    id?: InputMaybe<ToolboxListing_Icon_Id_Operator>;
    mimeType?: InputMaybe<ToolboxListing_Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<ToolboxListing_Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<ToolboxListing_Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<ToolboxListing_Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<ToolboxListing_Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<ToolboxListing_Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<ToolboxListing_Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<ToolboxListing_Icon_UpdatedAt_Operator>;
    url?: InputMaybe<ToolboxListing_Icon_Url_Operator>;
    width?: InputMaybe<ToolboxListing_Icon_Width_Operator>;
};

export type ToolboxListing_Icon_Where_Or = {
    alt?: InputMaybe<ToolboxListing_Icon_Alt_Operator>;
    createdAt?: InputMaybe<ToolboxListing_Icon_CreatedAt_Operator>;
    filename?: InputMaybe<ToolboxListing_Icon_Filename_Operator>;
    filesize?: InputMaybe<ToolboxListing_Icon_Filesize_Operator>;
    height?: InputMaybe<ToolboxListing_Icon_Height_Operator>;
    id?: InputMaybe<ToolboxListing_Icon_Id_Operator>;
    mimeType?: InputMaybe<ToolboxListing_Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<ToolboxListing_Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<ToolboxListing_Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<ToolboxListing_Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<ToolboxListing_Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<ToolboxListing_Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<ToolboxListing_Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<ToolboxListing_Icon_UpdatedAt_Operator>;
    url?: InputMaybe<ToolboxListing_Icon_Url_Operator>;
    width?: InputMaybe<ToolboxListing_Icon_Width_Operator>;
};

export type ToolboxListing_Icon_Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Tools = {
    __typename?: 'Tools';
    docs?: Maybe<Array<Maybe<Tool>>>;
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
    hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
    limit?: Maybe<Scalars['Int']['output']>;
    nextPage?: Maybe<Scalars['Int']['output']>;
    offset?: Maybe<Scalars['Int']['output']>;
    page?: Maybe<Scalars['Int']['output']>;
    pagingCounter?: Maybe<Scalars['Int']['output']>;
    prevPage?: Maybe<Scalars['Int']['output']>;
    totalDocs?: Maybe<Scalars['Int']['output']>;
    totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ToolsCreateAccess = {
    __typename?: 'ToolsCreateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ToolsCreateDocAccess = {
    __typename?: 'ToolsCreateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ToolsDeleteAccess = {
    __typename?: 'ToolsDeleteAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ToolsDeleteDocAccess = {
    __typename?: 'ToolsDeleteDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ToolsDocAccessFields = {
    __typename?: 'ToolsDocAccessFields';
    createdAt?: Maybe<ToolsDocAccessFields_CreatedAt>;
    icon?: Maybe<ToolsDocAccessFields_Icon>;
    title?: Maybe<ToolsDocAccessFields_Title>;
    updatedAt?: Maybe<ToolsDocAccessFields_UpdatedAt>;
};

export type ToolsDocAccessFields_CreatedAt = {
    __typename?: 'ToolsDocAccessFields_createdAt';
    create?: Maybe<ToolsDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<ToolsDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<ToolsDocAccessFields_CreatedAt_Read>;
    update?: Maybe<ToolsDocAccessFields_CreatedAt_Update>;
};

export type ToolsDocAccessFields_CreatedAt_Create = {
    __typename?: 'ToolsDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ToolsDocAccessFields_CreatedAt_Delete = {
    __typename?: 'ToolsDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ToolsDocAccessFields_CreatedAt_Read = {
    __typename?: 'ToolsDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ToolsDocAccessFields_CreatedAt_Update = {
    __typename?: 'ToolsDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ToolsDocAccessFields_Icon = {
    __typename?: 'ToolsDocAccessFields_icon';
    create?: Maybe<ToolsDocAccessFields_Icon_Create>;
    delete?: Maybe<ToolsDocAccessFields_Icon_Delete>;
    read?: Maybe<ToolsDocAccessFields_Icon_Read>;
    update?: Maybe<ToolsDocAccessFields_Icon_Update>;
};

export type ToolsDocAccessFields_Icon_Create = {
    __typename?: 'ToolsDocAccessFields_icon_Create';
    permission: Scalars['Boolean']['output'];
};

export type ToolsDocAccessFields_Icon_Delete = {
    __typename?: 'ToolsDocAccessFields_icon_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ToolsDocAccessFields_Icon_Read = {
    __typename?: 'ToolsDocAccessFields_icon_Read';
    permission: Scalars['Boolean']['output'];
};

export type ToolsDocAccessFields_Icon_Update = {
    __typename?: 'ToolsDocAccessFields_icon_Update';
    permission: Scalars['Boolean']['output'];
};

export type ToolsDocAccessFields_Title = {
    __typename?: 'ToolsDocAccessFields_title';
    create?: Maybe<ToolsDocAccessFields_Title_Create>;
    delete?: Maybe<ToolsDocAccessFields_Title_Delete>;
    read?: Maybe<ToolsDocAccessFields_Title_Read>;
    update?: Maybe<ToolsDocAccessFields_Title_Update>;
};

export type ToolsDocAccessFields_Title_Create = {
    __typename?: 'ToolsDocAccessFields_title_Create';
    permission: Scalars['Boolean']['output'];
};

export type ToolsDocAccessFields_Title_Delete = {
    __typename?: 'ToolsDocAccessFields_title_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ToolsDocAccessFields_Title_Read = {
    __typename?: 'ToolsDocAccessFields_title_Read';
    permission: Scalars['Boolean']['output'];
};

export type ToolsDocAccessFields_Title_Update = {
    __typename?: 'ToolsDocAccessFields_title_Update';
    permission: Scalars['Boolean']['output'];
};

export type ToolsDocAccessFields_UpdatedAt = {
    __typename?: 'ToolsDocAccessFields_updatedAt';
    create?: Maybe<ToolsDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<ToolsDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<ToolsDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<ToolsDocAccessFields_UpdatedAt_Update>;
};

export type ToolsDocAccessFields_UpdatedAt_Create = {
    __typename?: 'ToolsDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ToolsDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'ToolsDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ToolsDocAccessFields_UpdatedAt_Read = {
    __typename?: 'ToolsDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ToolsDocAccessFields_UpdatedAt_Update = {
    __typename?: 'ToolsDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ToolsFields = {
    __typename?: 'ToolsFields';
    createdAt?: Maybe<ToolsFields_CreatedAt>;
    icon?: Maybe<ToolsFields_Icon>;
    title?: Maybe<ToolsFields_Title>;
    updatedAt?: Maybe<ToolsFields_UpdatedAt>;
};

export type ToolsFields_CreatedAt = {
    __typename?: 'ToolsFields_createdAt';
    create?: Maybe<ToolsFields_CreatedAt_Create>;
    delete?: Maybe<ToolsFields_CreatedAt_Delete>;
    read?: Maybe<ToolsFields_CreatedAt_Read>;
    update?: Maybe<ToolsFields_CreatedAt_Update>;
};

export type ToolsFields_CreatedAt_Create = {
    __typename?: 'ToolsFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ToolsFields_CreatedAt_Delete = {
    __typename?: 'ToolsFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ToolsFields_CreatedAt_Read = {
    __typename?: 'ToolsFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ToolsFields_CreatedAt_Update = {
    __typename?: 'ToolsFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ToolsFields_Icon = {
    __typename?: 'ToolsFields_icon';
    create?: Maybe<ToolsFields_Icon_Create>;
    delete?: Maybe<ToolsFields_Icon_Delete>;
    read?: Maybe<ToolsFields_Icon_Read>;
    update?: Maybe<ToolsFields_Icon_Update>;
};

export type ToolsFields_Icon_Create = {
    __typename?: 'ToolsFields_icon_Create';
    permission: Scalars['Boolean']['output'];
};

export type ToolsFields_Icon_Delete = {
    __typename?: 'ToolsFields_icon_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ToolsFields_Icon_Read = {
    __typename?: 'ToolsFields_icon_Read';
    permission: Scalars['Boolean']['output'];
};

export type ToolsFields_Icon_Update = {
    __typename?: 'ToolsFields_icon_Update';
    permission: Scalars['Boolean']['output'];
};

export type ToolsFields_Title = {
    __typename?: 'ToolsFields_title';
    create?: Maybe<ToolsFields_Title_Create>;
    delete?: Maybe<ToolsFields_Title_Delete>;
    read?: Maybe<ToolsFields_Title_Read>;
    update?: Maybe<ToolsFields_Title_Update>;
};

export type ToolsFields_Title_Create = {
    __typename?: 'ToolsFields_title_Create';
    permission: Scalars['Boolean']['output'];
};

export type ToolsFields_Title_Delete = {
    __typename?: 'ToolsFields_title_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ToolsFields_Title_Read = {
    __typename?: 'ToolsFields_title_Read';
    permission: Scalars['Boolean']['output'];
};

export type ToolsFields_Title_Update = {
    __typename?: 'ToolsFields_title_Update';
    permission: Scalars['Boolean']['output'];
};

export type ToolsFields_UpdatedAt = {
    __typename?: 'ToolsFields_updatedAt';
    create?: Maybe<ToolsFields_UpdatedAt_Create>;
    delete?: Maybe<ToolsFields_UpdatedAt_Delete>;
    read?: Maybe<ToolsFields_UpdatedAt_Read>;
    update?: Maybe<ToolsFields_UpdatedAt_Update>;
};

export type ToolsFields_UpdatedAt_Create = {
    __typename?: 'ToolsFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ToolsFields_UpdatedAt_Delete = {
    __typename?: 'ToolsFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ToolsFields_UpdatedAt_Read = {
    __typename?: 'ToolsFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ToolsFields_UpdatedAt_Update = {
    __typename?: 'ToolsFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ToolsReadAccess = {
    __typename?: 'ToolsReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ToolsReadDocAccess = {
    __typename?: 'ToolsReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ToolsUpdateAccess = {
    __typename?: 'ToolsUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ToolsUpdateDocAccess = {
    __typename?: 'ToolsUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type User = {
    __typename?: 'User';
    apiKey?: Maybe<Scalars['String']['output']>;
    apiKeyIndex?: Maybe<Scalars['String']['output']>;
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    email: Scalars['EmailAddress']['output'];
    enableAPIKey?: Maybe<Scalars['Boolean']['output']>;
    hash?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    lockUntil?: Maybe<Scalars['DateTime']['output']>;
    loginAttempts?: Maybe<Scalars['Float']['output']>;
    password: Scalars['String']['output'];
    resetPasswordExpiration?: Maybe<Scalars['DateTime']['output']>;
    resetPasswordToken?: Maybe<Scalars['String']['output']>;
    salt?: Maybe<Scalars['String']['output']>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type User_ApiKey_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Email_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
    contains?: InputMaybe<Scalars['EmailAddress']['input']>;
    equals?: InputMaybe<Scalars['EmailAddress']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
    like?: InputMaybe<Scalars['EmailAddress']['input']>;
    not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type User_EnableApiKey_Operator = {
    equals?: InputMaybe<Scalars['Boolean']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Where = {
    AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
    apiKey?: InputMaybe<User_ApiKey_Operator>;
    createdAt?: InputMaybe<User_CreatedAt_Operator>;
    email?: InputMaybe<User_Email_Operator>;
    enableAPIKey?: InputMaybe<User_EnableApiKey_Operator>;
    id?: InputMaybe<User_Id_Operator>;
    updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_And = {
    apiKey?: InputMaybe<User_ApiKey_Operator>;
    createdAt?: InputMaybe<User_CreatedAt_Operator>;
    email?: InputMaybe<User_Email_Operator>;
    enableAPIKey?: InputMaybe<User_EnableApiKey_Operator>;
    id?: InputMaybe<User_Id_Operator>;
    updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_Or = {
    apiKey?: InputMaybe<User_ApiKey_Operator>;
    createdAt?: InputMaybe<User_CreatedAt_Operator>;
    email?: InputMaybe<User_Email_Operator>;
    enableAPIKey?: InputMaybe<User_EnableApiKey_Operator>;
    id?: InputMaybe<User_Id_Operator>;
    updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type Users = {
    __typename?: 'Users';
    docs?: Maybe<Array<Maybe<User>>>;
    hasNextPage?: Maybe<Scalars['Boolean']['output']>;
    hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
    limit?: Maybe<Scalars['Int']['output']>;
    nextPage?: Maybe<Scalars['Int']['output']>;
    offset?: Maybe<Scalars['Int']['output']>;
    page?: Maybe<Scalars['Int']['output']>;
    pagingCounter?: Maybe<Scalars['Int']['output']>;
    prevPage?: Maybe<Scalars['Int']['output']>;
    totalDocs?: Maybe<Scalars['Int']['output']>;
    totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UsersCreateAccess = {
    __typename?: 'UsersCreateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersCreateDocAccess = {
    __typename?: 'UsersCreateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteAccess = {
    __typename?: 'UsersDeleteAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteDocAccess = {
    __typename?: 'UsersDeleteDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDocAccessFields = {
    __typename?: 'UsersDocAccessFields';
    apiKey?: Maybe<UsersDocAccessFields_ApiKey>;
    createdAt?: Maybe<UsersDocAccessFields_CreatedAt>;
    email?: Maybe<UsersDocAccessFields_Email>;
    enableAPIKey?: Maybe<UsersDocAccessFields_EnableApiKey>;
    password?: Maybe<UsersDocAccessFields_Password>;
    updatedAt?: Maybe<UsersDocAccessFields_UpdatedAt>;
};

export type UsersDocAccessFields_ApiKey = {
    __typename?: 'UsersDocAccessFields_apiKey';
    create?: Maybe<UsersDocAccessFields_ApiKey_Create>;
    delete?: Maybe<UsersDocAccessFields_ApiKey_Delete>;
    read?: Maybe<UsersDocAccessFields_ApiKey_Read>;
    update?: Maybe<UsersDocAccessFields_ApiKey_Update>;
};

export type UsersDocAccessFields_ApiKey_Create = {
    __typename?: 'UsersDocAccessFields_apiKey_Create';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_ApiKey_Delete = {
    __typename?: 'UsersDocAccessFields_apiKey_Delete';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_ApiKey_Read = {
    __typename?: 'UsersDocAccessFields_apiKey_Read';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_ApiKey_Update = {
    __typename?: 'UsersDocAccessFields_apiKey_Update';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt = {
    __typename?: 'UsersDocAccessFields_createdAt';
    create?: Maybe<UsersDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<UsersDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<UsersDocAccessFields_CreatedAt_Read>;
    update?: Maybe<UsersDocAccessFields_CreatedAt_Update>;
};

export type UsersDocAccessFields_CreatedAt_Create = {
    __typename?: 'UsersDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Delete = {
    __typename?: 'UsersDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Read = {
    __typename?: 'UsersDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Update = {
    __typename?: 'UsersDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email = {
    __typename?: 'UsersDocAccessFields_email';
    create?: Maybe<UsersDocAccessFields_Email_Create>;
    delete?: Maybe<UsersDocAccessFields_Email_Delete>;
    read?: Maybe<UsersDocAccessFields_Email_Read>;
    update?: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
    __typename?: 'UsersDocAccessFields_email_Create';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Delete = {
    __typename?: 'UsersDocAccessFields_email_Delete';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Read = {
    __typename?: 'UsersDocAccessFields_email_Read';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Update = {
    __typename?: 'UsersDocAccessFields_email_Update';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_EnableApiKey = {
    __typename?: 'UsersDocAccessFields_enableAPIKey';
    create?: Maybe<UsersDocAccessFields_EnableApiKey_Create>;
    delete?: Maybe<UsersDocAccessFields_EnableApiKey_Delete>;
    read?: Maybe<UsersDocAccessFields_EnableApiKey_Read>;
    update?: Maybe<UsersDocAccessFields_EnableApiKey_Update>;
};

export type UsersDocAccessFields_EnableApiKey_Create = {
    __typename?: 'UsersDocAccessFields_enableAPIKey_Create';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_EnableApiKey_Delete = {
    __typename?: 'UsersDocAccessFields_enableAPIKey_Delete';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_EnableApiKey_Read = {
    __typename?: 'UsersDocAccessFields_enableAPIKey_Read';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_EnableApiKey_Update = {
    __typename?: 'UsersDocAccessFields_enableAPIKey_Update';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password = {
    __typename?: 'UsersDocAccessFields_password';
    create?: Maybe<UsersDocAccessFields_Password_Create>;
    delete?: Maybe<UsersDocAccessFields_Password_Delete>;
    read?: Maybe<UsersDocAccessFields_Password_Read>;
    update?: Maybe<UsersDocAccessFields_Password_Update>;
};

export type UsersDocAccessFields_Password_Create = {
    __typename?: 'UsersDocAccessFields_password_Create';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Delete = {
    __typename?: 'UsersDocAccessFields_password_Delete';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Read = {
    __typename?: 'UsersDocAccessFields_password_Read';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Update = {
    __typename?: 'UsersDocAccessFields_password_Update';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt = {
    __typename?: 'UsersDocAccessFields_updatedAt';
    create?: Maybe<UsersDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<UsersDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<UsersDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<UsersDocAccessFields_UpdatedAt_Update>;
};

export type UsersDocAccessFields_UpdatedAt_Create = {
    __typename?: 'UsersDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'UsersDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Read = {
    __typename?: 'UsersDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Update = {
    __typename?: 'UsersDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields = {
    __typename?: 'UsersFields';
    apiKey?: Maybe<UsersFields_ApiKey>;
    createdAt?: Maybe<UsersFields_CreatedAt>;
    email?: Maybe<UsersFields_Email>;
    enableAPIKey?: Maybe<UsersFields_EnableApiKey>;
    password?: Maybe<UsersFields_Password>;
    updatedAt?: Maybe<UsersFields_UpdatedAt>;
};

export type UsersFields_ApiKey = {
    __typename?: 'UsersFields_apiKey';
    create?: Maybe<UsersFields_ApiKey_Create>;
    delete?: Maybe<UsersFields_ApiKey_Delete>;
    read?: Maybe<UsersFields_ApiKey_Read>;
    update?: Maybe<UsersFields_ApiKey_Update>;
};

export type UsersFields_ApiKey_Create = {
    __typename?: 'UsersFields_apiKey_Create';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_ApiKey_Delete = {
    __typename?: 'UsersFields_apiKey_Delete';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_ApiKey_Read = {
    __typename?: 'UsersFields_apiKey_Read';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_ApiKey_Update = {
    __typename?: 'UsersFields_apiKey_Update';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt = {
    __typename?: 'UsersFields_createdAt';
    create?: Maybe<UsersFields_CreatedAt_Create>;
    delete?: Maybe<UsersFields_CreatedAt_Delete>;
    read?: Maybe<UsersFields_CreatedAt_Read>;
    update?: Maybe<UsersFields_CreatedAt_Update>;
};

export type UsersFields_CreatedAt_Create = {
    __typename?: 'UsersFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Delete = {
    __typename?: 'UsersFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Read = {
    __typename?: 'UsersFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Update = {
    __typename?: 'UsersFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email = {
    __typename?: 'UsersFields_email';
    create?: Maybe<UsersFields_Email_Create>;
    delete?: Maybe<UsersFields_Email_Delete>;
    read?: Maybe<UsersFields_Email_Read>;
    update?: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
    __typename?: 'UsersFields_email_Create';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Delete = {
    __typename?: 'UsersFields_email_Delete';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Read = {
    __typename?: 'UsersFields_email_Read';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Update = {
    __typename?: 'UsersFields_email_Update';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_EnableApiKey = {
    __typename?: 'UsersFields_enableAPIKey';
    create?: Maybe<UsersFields_EnableApiKey_Create>;
    delete?: Maybe<UsersFields_EnableApiKey_Delete>;
    read?: Maybe<UsersFields_EnableApiKey_Read>;
    update?: Maybe<UsersFields_EnableApiKey_Update>;
};

export type UsersFields_EnableApiKey_Create = {
    __typename?: 'UsersFields_enableAPIKey_Create';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_EnableApiKey_Delete = {
    __typename?: 'UsersFields_enableAPIKey_Delete';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_EnableApiKey_Read = {
    __typename?: 'UsersFields_enableAPIKey_Read';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_EnableApiKey_Update = {
    __typename?: 'UsersFields_enableAPIKey_Update';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password = {
    __typename?: 'UsersFields_password';
    create?: Maybe<UsersFields_Password_Create>;
    delete?: Maybe<UsersFields_Password_Delete>;
    read?: Maybe<UsersFields_Password_Read>;
    update?: Maybe<UsersFields_Password_Update>;
};

export type UsersFields_Password_Create = {
    __typename?: 'UsersFields_password_Create';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Delete = {
    __typename?: 'UsersFields_password_Delete';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Read = {
    __typename?: 'UsersFields_password_Read';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Update = {
    __typename?: 'UsersFields_password_Update';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt = {
    __typename?: 'UsersFields_updatedAt';
    create?: Maybe<UsersFields_UpdatedAt_Create>;
    delete?: Maybe<UsersFields_UpdatedAt_Delete>;
    read?: Maybe<UsersFields_UpdatedAt_Read>;
    update?: Maybe<UsersFields_UpdatedAt_Update>;
};

export type UsersFields_UpdatedAt_Create = {
    __typename?: 'UsersFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Delete = {
    __typename?: 'UsersFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Read = {
    __typename?: 'UsersFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Update = {
    __typename?: 'UsersFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type UsersReadAccess = {
    __typename?: 'UsersReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersReadDocAccess = {
    __typename?: 'UsersReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockAccess = {
    __typename?: 'UsersUnlockAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockDocAccess = {
    __typename?: 'UsersUnlockDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateAccess = {
    __typename?: 'UsersUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateDocAccess = {
    __typename?: 'UsersUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Case_Study_ListingAccess = {
    __typename?: 'case_study_listingAccess';
    fields?: Maybe<CaseStudyListingFields>;
    read?: Maybe<CaseStudyListingReadAccess>;
    update?: Maybe<CaseStudyListingUpdateAccess>;
};

export type Case_Study_ListingDocAccess = {
    __typename?: 'case_study_listingDocAccess';
    fields?: Maybe<CaseStudyListingDocAccessFields>;
    read?: Maybe<CaseStudyListingReadDocAccess>;
    update?: Maybe<CaseStudyListingUpdateDocAccess>;
};

export type HeroesAccess = {
    __typename?: 'heroesAccess';
    create?: Maybe<HeroesCreateAccess>;
    delete?: Maybe<HeroesDeleteAccess>;
    fields?: Maybe<HeroesFields>;
    read?: Maybe<HeroesReadAccess>;
    update?: Maybe<HeroesUpdateAccess>;
};

export type HeroesDocAccess = {
    __typename?: 'heroesDocAccess';
    create?: Maybe<HeroesCreateDocAccess>;
    delete?: Maybe<HeroesDeleteDocAccess>;
    fields?: Maybe<HeroesDocAccessFields>;
    read?: Maybe<HeroesReadDocAccess>;
    update?: Maybe<HeroesUpdateDocAccess>;
};

export type IconsAccess = {
    __typename?: 'iconsAccess';
    create?: Maybe<IconsCreateAccess>;
    delete?: Maybe<IconsDeleteAccess>;
    fields?: Maybe<IconsFields>;
    read?: Maybe<IconsReadAccess>;
    update?: Maybe<IconsUpdateAccess>;
};

export type IconsDocAccess = {
    __typename?: 'iconsDocAccess';
    create?: Maybe<IconsCreateDocAccess>;
    delete?: Maybe<IconsDeleteDocAccess>;
    fields?: Maybe<IconsDocAccessFields>;
    read?: Maybe<IconsReadDocAccess>;
    update?: Maybe<IconsUpdateDocAccess>;
};

export type ImagesAccess = {
    __typename?: 'imagesAccess';
    create?: Maybe<ImagesCreateAccess>;
    delete?: Maybe<ImagesDeleteAccess>;
    fields?: Maybe<ImagesFields>;
    read?: Maybe<ImagesReadAccess>;
    update?: Maybe<ImagesUpdateAccess>;
};

export type ImagesDocAccess = {
    __typename?: 'imagesDocAccess';
    create?: Maybe<ImagesCreateDocAccess>;
    delete?: Maybe<ImagesDeleteDocAccess>;
    fields?: Maybe<ImagesDocAccessFields>;
    read?: Maybe<ImagesReadDocAccess>;
    update?: Maybe<ImagesUpdateDocAccess>;
};

export type MutationCaseStudyListingInput = {
    createdAt?: InputMaybe<Scalars['String']['input']>;
    icon?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationHeroInput = {
    coloredSubhead?: InputMaybe<Scalars['JSON']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    heading: Scalars['String']['input'];
    headingTag: Scalars['String']['input'];
    icon?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationHeroUpdateInput = {
    coloredSubhead?: InputMaybe<Scalars['JSON']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    heading?: InputMaybe<Scalars['String']['input']>;
    headingTag?: InputMaybe<Scalars['String']['input']>;
    icon?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationIconInput = {
    alt: Scalars['String']['input'];
    createdAt?: InputMaybe<Scalars['String']['input']>;
    filename?: InputMaybe<Scalars['String']['input']>;
    filesize?: InputMaybe<Scalars['Float']['input']>;
    height?: InputMaybe<Scalars['Float']['input']>;
    mimeType?: InputMaybe<Scalars['String']['input']>;
    sizes?: InputMaybe<MutationIcon_SizesInput>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
    width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationIconUpdateInput = {
    alt?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    filename?: InputMaybe<Scalars['String']['input']>;
    filesize?: InputMaybe<Scalars['Float']['input']>;
    height?: InputMaybe<Scalars['Float']['input']>;
    mimeType?: InputMaybe<Scalars['String']['input']>;
    sizes?: InputMaybe<MutationIconUpdate_SizesInput>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
    width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationIconUpdate_SizesInput = {
    thumbnail?: InputMaybe<MutationIconUpdate_Sizes_ThumbnailInput>;
};

export type MutationIconUpdate_Sizes_ThumbnailInput = {
    filename?: InputMaybe<Scalars['String']['input']>;
    filesize?: InputMaybe<Scalars['Float']['input']>;
    height?: InputMaybe<Scalars['Float']['input']>;
    mimeType?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
    width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationIcon_SizesInput = {
    thumbnail?: InputMaybe<MutationIcon_Sizes_ThumbnailInput>;
};

export type MutationIcon_Sizes_ThumbnailInput = {
    filename?: InputMaybe<Scalars['String']['input']>;
    filesize?: InputMaybe<Scalars['Float']['input']>;
    height?: InputMaybe<Scalars['Float']['input']>;
    mimeType?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
    width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationImageInput = {
    alt: Scalars['String']['input'];
    createdAt?: InputMaybe<Scalars['String']['input']>;
    filename?: InputMaybe<Scalars['String']['input']>;
    filesize?: InputMaybe<Scalars['Float']['input']>;
    height?: InputMaybe<Scalars['Float']['input']>;
    mimeType?: InputMaybe<Scalars['String']['input']>;
    sizes?: InputMaybe<MutationImage_SizesInput>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
    width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationImageUpdateInput = {
    alt?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    filename?: InputMaybe<Scalars['String']['input']>;
    filesize?: InputMaybe<Scalars['Float']['input']>;
    height?: InputMaybe<Scalars['Float']['input']>;
    mimeType?: InputMaybe<Scalars['String']['input']>;
    sizes?: InputMaybe<MutationImageUpdate_SizesInput>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
    width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationImageUpdate_SizesInput = {
    thumbnail?: InputMaybe<MutationImageUpdate_Sizes_ThumbnailInput>;
};

export type MutationImageUpdate_Sizes_ThumbnailInput = {
    filename?: InputMaybe<Scalars['String']['input']>;
    filesize?: InputMaybe<Scalars['Float']['input']>;
    height?: InputMaybe<Scalars['Float']['input']>;
    mimeType?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
    width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationImage_SizesInput = {
    thumbnail?: InputMaybe<MutationImage_Sizes_ThumbnailInput>;
};

export type MutationImage_Sizes_ThumbnailInput = {
    filename?: InputMaybe<Scalars['String']['input']>;
    filesize?: InputMaybe<Scalars['Float']['input']>;
    height?: InputMaybe<Scalars['Float']['input']>;
    mimeType?: InputMaybe<Scalars['String']['input']>;
    url?: InputMaybe<Scalars['String']['input']>;
    width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationNavInput = {
    createdAt?: InputMaybe<Scalars['String']['input']>;
    footerCopyrightText?: InputMaybe<Scalars['String']['input']>;
    menuItems?: InputMaybe<Array<InputMaybe<MutationNav_MenuItemsInput>>>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationNav_MenuItemsInput = {
    customLabel?: InputMaybe<Scalars['String']['input']>;
    id?: InputMaybe<Scalars['String']['input']>;
    overridePageName?: InputMaybe<Scalars['Boolean']['input']>;
    page?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPageInput = {
    createdAt?: InputMaybe<Scalars['String']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPageUpdateInput = {
    createdAt?: InputMaybe<Scalars['String']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProjectInput = {
    cardInfo?: InputMaybe<MutationProject_CardInfoInput>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    intro?: InputMaybe<MutationProject_IntroInput>;
    title: Scalars['String']['input'];
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProjectUpdateInput = {
    cardInfo?: InputMaybe<MutationProjectUpdate_CardInfoInput>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    intro?: InputMaybe<MutationProjectUpdate_IntroInput>;
    title?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProjectUpdate_CardInfoInput = {
    image?: InputMaybe<Scalars['String']['input']>;
    snippet?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProjectUpdate_IntroInput = {
    description?: InputMaybe<Scalars['String']['input']>;
    image?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProject_CardInfoInput = {
    image?: InputMaybe<Scalars['String']['input']>;
    snippet?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProject_IntroInput = {
    description?: InputMaybe<Scalars['String']['input']>;
    image?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTestimonialInput = {
    author: Scalars['String']['input'];
    company: Scalars['String']['input'];
    createdAt?: InputMaybe<Scalars['String']['input']>;
    excerpt?: InputMaybe<Scalars['String']['input']>;
    image: Scalars['String']['input'];
    jobTitle: Scalars['String']['input'];
    linkedin?: InputMaybe<Scalars['String']['input']>;
    testimonial: Scalars['JSON']['input'];
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTestimonialListingInput = {
    createdAt?: InputMaybe<Scalars['String']['input']>;
    icon?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTestimonialUpdateInput = {
    author?: InputMaybe<Scalars['String']['input']>;
    company?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    excerpt?: InputMaybe<Scalars['String']['input']>;
    image?: InputMaybe<Scalars['String']['input']>;
    jobTitle?: InputMaybe<Scalars['String']['input']>;
    linkedin?: InputMaybe<Scalars['String']['input']>;
    testimonial?: InputMaybe<Scalars['JSON']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationToolInput = {
    createdAt?: InputMaybe<Scalars['String']['input']>;
    icon: Scalars['String']['input'];
    title: Scalars['String']['input'];
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationToolUpdateInput = {
    createdAt?: InputMaybe<Scalars['String']['input']>;
    icon?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationToolboxListingInput = {
    createdAt?: InputMaybe<Scalars['String']['input']>;
    icon?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    tools?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserInput = {
    apiKey?: InputMaybe<Scalars['String']['input']>;
    apiKeyIndex?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    email: Scalars['String']['input'];
    enableAPIKey?: InputMaybe<Scalars['Boolean']['input']>;
    hash?: InputMaybe<Scalars['String']['input']>;
    lockUntil?: InputMaybe<Scalars['String']['input']>;
    loginAttempts?: InputMaybe<Scalars['Float']['input']>;
    password: Scalars['String']['input'];
    resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
    resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
    salt?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserUpdateInput = {
    apiKey?: InputMaybe<Scalars['String']['input']>;
    apiKeyIndex?: InputMaybe<Scalars['String']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    email?: InputMaybe<Scalars['String']['input']>;
    enableAPIKey?: InputMaybe<Scalars['Boolean']['input']>;
    hash?: InputMaybe<Scalars['String']['input']>;
    lockUntil?: InputMaybe<Scalars['String']['input']>;
    loginAttempts?: InputMaybe<Scalars['Float']['input']>;
    password?: InputMaybe<Scalars['String']['input']>;
    resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
    resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
    salt?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type NavAccess = {
    __typename?: 'navAccess';
    fields?: Maybe<NavFields>;
    read?: Maybe<NavReadAccess>;
    update?: Maybe<NavUpdateAccess>;
};

export type NavDocAccess = {
    __typename?: 'navDocAccess';
    fields?: Maybe<NavDocAccessFields>;
    read?: Maybe<NavReadDocAccess>;
    update?: Maybe<NavUpdateDocAccess>;
};

export type PagesAccess = {
    __typename?: 'pagesAccess';
    create?: Maybe<PagesCreateAccess>;
    delete?: Maybe<PagesDeleteAccess>;
    fields?: Maybe<PagesFields>;
    read?: Maybe<PagesReadAccess>;
    update?: Maybe<PagesUpdateAccess>;
};

export type PagesDocAccess = {
    __typename?: 'pagesDocAccess';
    create?: Maybe<PagesCreateDocAccess>;
    delete?: Maybe<PagesDeleteDocAccess>;
    fields?: Maybe<PagesDocAccessFields>;
    read?: Maybe<PagesReadDocAccess>;
    update?: Maybe<PagesUpdateDocAccess>;
};

export type ProjectsAccess = {
    __typename?: 'projectsAccess';
    create?: Maybe<ProjectsCreateAccess>;
    delete?: Maybe<ProjectsDeleteAccess>;
    fields?: Maybe<ProjectsFields>;
    read?: Maybe<ProjectsReadAccess>;
    update?: Maybe<ProjectsUpdateAccess>;
};

export type ProjectsDocAccess = {
    __typename?: 'projectsDocAccess';
    create?: Maybe<ProjectsCreateDocAccess>;
    delete?: Maybe<ProjectsDeleteDocAccess>;
    fields?: Maybe<ProjectsDocAccessFields>;
    read?: Maybe<ProjectsReadDocAccess>;
    update?: Maybe<ProjectsUpdateDocAccess>;
};

export type Testimonial_ListingAccess = {
    __typename?: 'testimonial_listingAccess';
    fields?: Maybe<TestimonialListingFields>;
    read?: Maybe<TestimonialListingReadAccess>;
    update?: Maybe<TestimonialListingUpdateAccess>;
};

export type Testimonial_ListingDocAccess = {
    __typename?: 'testimonial_listingDocAccess';
    fields?: Maybe<TestimonialListingDocAccessFields>;
    read?: Maybe<TestimonialListingReadDocAccess>;
    update?: Maybe<TestimonialListingUpdateDocAccess>;
};

export type TestimonialsAccess = {
    __typename?: 'testimonialsAccess';
    create?: Maybe<TestimonialsCreateAccess>;
    delete?: Maybe<TestimonialsDeleteAccess>;
    fields?: Maybe<TestimonialsFields>;
    read?: Maybe<TestimonialsReadAccess>;
    update?: Maybe<TestimonialsUpdateAccess>;
};

export type TestimonialsDocAccess = {
    __typename?: 'testimonialsDocAccess';
    create?: Maybe<TestimonialsCreateDocAccess>;
    delete?: Maybe<TestimonialsDeleteDocAccess>;
    fields?: Maybe<TestimonialsDocAccessFields>;
    read?: Maybe<TestimonialsReadDocAccess>;
    update?: Maybe<TestimonialsUpdateDocAccess>;
};

export type Toolbox_ListingAccess = {
    __typename?: 'toolbox_listingAccess';
    fields?: Maybe<ToolboxListingFields>;
    read?: Maybe<ToolboxListingReadAccess>;
    update?: Maybe<ToolboxListingUpdateAccess>;
};

export type Toolbox_ListingDocAccess = {
    __typename?: 'toolbox_listingDocAccess';
    fields?: Maybe<ToolboxListingDocAccessFields>;
    read?: Maybe<ToolboxListingReadDocAccess>;
    update?: Maybe<ToolboxListingUpdateDocAccess>;
};

export type ToolsAccess = {
    __typename?: 'toolsAccess';
    create?: Maybe<ToolsCreateAccess>;
    delete?: Maybe<ToolsDeleteAccess>;
    fields?: Maybe<ToolsFields>;
    read?: Maybe<ToolsReadAccess>;
    update?: Maybe<ToolsUpdateAccess>;
};

export type ToolsDocAccess = {
    __typename?: 'toolsDocAccess';
    create?: Maybe<ToolsCreateDocAccess>;
    delete?: Maybe<ToolsDeleteDocAccess>;
    fields?: Maybe<ToolsDocAccessFields>;
    read?: Maybe<ToolsReadDocAccess>;
    update?: Maybe<ToolsUpdateDocAccess>;
};

export type UsersAccess = {
    __typename?: 'usersAccess';
    create?: Maybe<UsersCreateAccess>;
    delete?: Maybe<UsersDeleteAccess>;
    fields?: Maybe<UsersFields>;
    read?: Maybe<UsersReadAccess>;
    unlock?: Maybe<UsersUnlockAccess>;
    update?: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
    __typename?: 'usersDocAccess';
    create?: Maybe<UsersCreateDocAccess>;
    delete?: Maybe<UsersDeleteDocAccess>;
    fields?: Maybe<UsersDocAccessFields>;
    read?: Maybe<UsersReadDocAccess>;
    unlock?: Maybe<UsersUnlockDocAccess>;
    update?: Maybe<UsersUpdateDocAccess>;
};

export type UsersJwt = {
    __typename?: 'usersJWT';
    collection: Scalars['String']['output'];
    email: Scalars['EmailAddress']['output'];
};

export type UsersLoginResult = {
    __typename?: 'usersLoginResult';
    exp?: Maybe<Scalars['Int']['output']>;
    token?: Maybe<Scalars['String']['output']>;
    user?: Maybe<User>;
};

export type UsersMe = {
    __typename?: 'usersMe';
    collection?: Maybe<Scalars['String']['output']>;
    exp?: Maybe<Scalars['Int']['output']>;
    token?: Maybe<Scalars['String']['output']>;
    user?: Maybe<User>;
};

export type UsersRefreshedUser = {
    __typename?: 'usersRefreshedUser';
    exp?: Maybe<Scalars['Int']['output']>;
    refreshedToken?: Maybe<Scalars['String']['output']>;
    user?: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
    __typename?: 'usersResetPassword';
    token?: Maybe<Scalars['String']['output']>;
    user?: Maybe<User>;
};
