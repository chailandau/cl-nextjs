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

export type About = {
    __typename?: 'About';
    coloredSubhead?: Maybe<Scalars['JSON']['output']>;
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    image?: Maybe<Image>;
    pets?: Maybe<About_Pets>;
    text?: Maybe<Scalars['JSON']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AboutColoredSubheadArgs = {
    depth?: InputMaybe<Scalars['Int']['input']>;
};

export type AboutImageArgs = {
    where?: InputMaybe<About_Image_Where>;
};

export type AboutTextArgs = {
    depth?: InputMaybe<Scalars['Int']['input']>;
};

export type AboutDocAccessFields = {
    __typename?: 'AboutDocAccessFields';
    coloredSubhead?: Maybe<AboutDocAccessFields_ColoredSubhead>;
    createdAt?: Maybe<AboutDocAccessFields_CreatedAt>;
    image?: Maybe<AboutDocAccessFields_Image>;
    pets?: Maybe<AboutDocAccessFields_Pets>;
    text?: Maybe<AboutDocAccessFields_Text>;
    title?: Maybe<AboutDocAccessFields_Title>;
    updatedAt?: Maybe<AboutDocAccessFields_UpdatedAt>;
};

export type AboutDocAccessFields_ColoredSubhead = {
    __typename?: 'AboutDocAccessFields_coloredSubhead';
    create?: Maybe<AboutDocAccessFields_ColoredSubhead_Create>;
    delete?: Maybe<AboutDocAccessFields_ColoredSubhead_Delete>;
    read?: Maybe<AboutDocAccessFields_ColoredSubhead_Read>;
    update?: Maybe<AboutDocAccessFields_ColoredSubhead_Update>;
};

export type AboutDocAccessFields_ColoredSubhead_Create = {
    __typename?: 'AboutDocAccessFields_coloredSubhead_Create';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_ColoredSubhead_Delete = {
    __typename?: 'AboutDocAccessFields_coloredSubhead_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_ColoredSubhead_Read = {
    __typename?: 'AboutDocAccessFields_coloredSubhead_Read';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_ColoredSubhead_Update = {
    __typename?: 'AboutDocAccessFields_coloredSubhead_Update';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_CreatedAt = {
    __typename?: 'AboutDocAccessFields_createdAt';
    create?: Maybe<AboutDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<AboutDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<AboutDocAccessFields_CreatedAt_Read>;
    update?: Maybe<AboutDocAccessFields_CreatedAt_Update>;
};

export type AboutDocAccessFields_CreatedAt_Create = {
    __typename?: 'AboutDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_CreatedAt_Delete = {
    __typename?: 'AboutDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_CreatedAt_Read = {
    __typename?: 'AboutDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_CreatedAt_Update = {
    __typename?: 'AboutDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Image = {
    __typename?: 'AboutDocAccessFields_image';
    create?: Maybe<AboutDocAccessFields_Image_Create>;
    delete?: Maybe<AboutDocAccessFields_Image_Delete>;
    read?: Maybe<AboutDocAccessFields_Image_Read>;
    update?: Maybe<AboutDocAccessFields_Image_Update>;
};

export type AboutDocAccessFields_Image_Create = {
    __typename?: 'AboutDocAccessFields_image_Create';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Image_Delete = {
    __typename?: 'AboutDocAccessFields_image_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Image_Read = {
    __typename?: 'AboutDocAccessFields_image_Read';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Image_Update = {
    __typename?: 'AboutDocAccessFields_image_Update';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Pets = {
    __typename?: 'AboutDocAccessFields_pets';
    create?: Maybe<AboutDocAccessFields_Pets_Create>;
    delete?: Maybe<AboutDocAccessFields_Pets_Delete>;
    fields?: Maybe<AboutDocAccessFields_Pets_Fields>;
    read?: Maybe<AboutDocAccessFields_Pets_Read>;
    update?: Maybe<AboutDocAccessFields_Pets_Update>;
};

export type AboutDocAccessFields_Pets_Create = {
    __typename?: 'AboutDocAccessFields_pets_Create';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Pets_Delete = {
    __typename?: 'AboutDocAccessFields_pets_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Pets_Fields = {
    __typename?: 'AboutDocAccessFields_pets_Fields';
    athena?: Maybe<AboutDocAccessFields_Pets_Athena>;
    harvey?: Maybe<AboutDocAccessFields_Pets_Harvey>;
    jasper?: Maybe<AboutDocAccessFields_Pets_Jasper>;
    warren?: Maybe<AboutDocAccessFields_Pets_Warren>;
};

export type AboutDocAccessFields_Pets_Read = {
    __typename?: 'AboutDocAccessFields_pets_Read';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Pets_Update = {
    __typename?: 'AboutDocAccessFields_pets_Update';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Pets_Athena = {
    __typename?: 'AboutDocAccessFields_pets_athena';
    create?: Maybe<AboutDocAccessFields_Pets_Athena_Create>;
    delete?: Maybe<AboutDocAccessFields_Pets_Athena_Delete>;
    read?: Maybe<AboutDocAccessFields_Pets_Athena_Read>;
    update?: Maybe<AboutDocAccessFields_Pets_Athena_Update>;
};

export type AboutDocAccessFields_Pets_Athena_Create = {
    __typename?: 'AboutDocAccessFields_pets_athena_Create';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Pets_Athena_Delete = {
    __typename?: 'AboutDocAccessFields_pets_athena_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Pets_Athena_Read = {
    __typename?: 'AboutDocAccessFields_pets_athena_Read';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Pets_Athena_Update = {
    __typename?: 'AboutDocAccessFields_pets_athena_Update';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Pets_Harvey = {
    __typename?: 'AboutDocAccessFields_pets_harvey';
    create?: Maybe<AboutDocAccessFields_Pets_Harvey_Create>;
    delete?: Maybe<AboutDocAccessFields_Pets_Harvey_Delete>;
    read?: Maybe<AboutDocAccessFields_Pets_Harvey_Read>;
    update?: Maybe<AboutDocAccessFields_Pets_Harvey_Update>;
};

export type AboutDocAccessFields_Pets_Harvey_Create = {
    __typename?: 'AboutDocAccessFields_pets_harvey_Create';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Pets_Harvey_Delete = {
    __typename?: 'AboutDocAccessFields_pets_harvey_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Pets_Harvey_Read = {
    __typename?: 'AboutDocAccessFields_pets_harvey_Read';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Pets_Harvey_Update = {
    __typename?: 'AboutDocAccessFields_pets_harvey_Update';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Pets_Jasper = {
    __typename?: 'AboutDocAccessFields_pets_jasper';
    create?: Maybe<AboutDocAccessFields_Pets_Jasper_Create>;
    delete?: Maybe<AboutDocAccessFields_Pets_Jasper_Delete>;
    read?: Maybe<AboutDocAccessFields_Pets_Jasper_Read>;
    update?: Maybe<AboutDocAccessFields_Pets_Jasper_Update>;
};

export type AboutDocAccessFields_Pets_Jasper_Create = {
    __typename?: 'AboutDocAccessFields_pets_jasper_Create';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Pets_Jasper_Delete = {
    __typename?: 'AboutDocAccessFields_pets_jasper_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Pets_Jasper_Read = {
    __typename?: 'AboutDocAccessFields_pets_jasper_Read';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Pets_Jasper_Update = {
    __typename?: 'AboutDocAccessFields_pets_jasper_Update';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Pets_Warren = {
    __typename?: 'AboutDocAccessFields_pets_warren';
    create?: Maybe<AboutDocAccessFields_Pets_Warren_Create>;
    delete?: Maybe<AboutDocAccessFields_Pets_Warren_Delete>;
    read?: Maybe<AboutDocAccessFields_Pets_Warren_Read>;
    update?: Maybe<AboutDocAccessFields_Pets_Warren_Update>;
};

export type AboutDocAccessFields_Pets_Warren_Create = {
    __typename?: 'AboutDocAccessFields_pets_warren_Create';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Pets_Warren_Delete = {
    __typename?: 'AboutDocAccessFields_pets_warren_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Pets_Warren_Read = {
    __typename?: 'AboutDocAccessFields_pets_warren_Read';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Pets_Warren_Update = {
    __typename?: 'AboutDocAccessFields_pets_warren_Update';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Text = {
    __typename?: 'AboutDocAccessFields_text';
    create?: Maybe<AboutDocAccessFields_Text_Create>;
    delete?: Maybe<AboutDocAccessFields_Text_Delete>;
    read?: Maybe<AboutDocAccessFields_Text_Read>;
    update?: Maybe<AboutDocAccessFields_Text_Update>;
};

export type AboutDocAccessFields_Text_Create = {
    __typename?: 'AboutDocAccessFields_text_Create';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Text_Delete = {
    __typename?: 'AboutDocAccessFields_text_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Text_Read = {
    __typename?: 'AboutDocAccessFields_text_Read';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Text_Update = {
    __typename?: 'AboutDocAccessFields_text_Update';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Title = {
    __typename?: 'AboutDocAccessFields_title';
    create?: Maybe<AboutDocAccessFields_Title_Create>;
    delete?: Maybe<AboutDocAccessFields_Title_Delete>;
    read?: Maybe<AboutDocAccessFields_Title_Read>;
    update?: Maybe<AboutDocAccessFields_Title_Update>;
};

export type AboutDocAccessFields_Title_Create = {
    __typename?: 'AboutDocAccessFields_title_Create';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Title_Delete = {
    __typename?: 'AboutDocAccessFields_title_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Title_Read = {
    __typename?: 'AboutDocAccessFields_title_Read';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_Title_Update = {
    __typename?: 'AboutDocAccessFields_title_Update';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_UpdatedAt = {
    __typename?: 'AboutDocAccessFields_updatedAt';
    create?: Maybe<AboutDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<AboutDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<AboutDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<AboutDocAccessFields_UpdatedAt_Update>;
};

export type AboutDocAccessFields_UpdatedAt_Create = {
    __typename?: 'AboutDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'AboutDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_UpdatedAt_Read = {
    __typename?: 'AboutDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type AboutDocAccessFields_UpdatedAt_Update = {
    __typename?: 'AboutDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields = {
    __typename?: 'AboutFields';
    coloredSubhead?: Maybe<AboutFields_ColoredSubhead>;
    createdAt?: Maybe<AboutFields_CreatedAt>;
    image?: Maybe<AboutFields_Image>;
    pets?: Maybe<AboutFields_Pets>;
    text?: Maybe<AboutFields_Text>;
    title?: Maybe<AboutFields_Title>;
    updatedAt?: Maybe<AboutFields_UpdatedAt>;
};

export type AboutFields_ColoredSubhead = {
    __typename?: 'AboutFields_coloredSubhead';
    create?: Maybe<AboutFields_ColoredSubhead_Create>;
    delete?: Maybe<AboutFields_ColoredSubhead_Delete>;
    read?: Maybe<AboutFields_ColoredSubhead_Read>;
    update?: Maybe<AboutFields_ColoredSubhead_Update>;
};

export type AboutFields_ColoredSubhead_Create = {
    __typename?: 'AboutFields_coloredSubhead_Create';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_ColoredSubhead_Delete = {
    __typename?: 'AboutFields_coloredSubhead_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_ColoredSubhead_Read = {
    __typename?: 'AboutFields_coloredSubhead_Read';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_ColoredSubhead_Update = {
    __typename?: 'AboutFields_coloredSubhead_Update';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_CreatedAt = {
    __typename?: 'AboutFields_createdAt';
    create?: Maybe<AboutFields_CreatedAt_Create>;
    delete?: Maybe<AboutFields_CreatedAt_Delete>;
    read?: Maybe<AboutFields_CreatedAt_Read>;
    update?: Maybe<AboutFields_CreatedAt_Update>;
};

export type AboutFields_CreatedAt_Create = {
    __typename?: 'AboutFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_CreatedAt_Delete = {
    __typename?: 'AboutFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_CreatedAt_Read = {
    __typename?: 'AboutFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_CreatedAt_Update = {
    __typename?: 'AboutFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Image = {
    __typename?: 'AboutFields_image';
    create?: Maybe<AboutFields_Image_Create>;
    delete?: Maybe<AboutFields_Image_Delete>;
    read?: Maybe<AboutFields_Image_Read>;
    update?: Maybe<AboutFields_Image_Update>;
};

export type AboutFields_Image_Create = {
    __typename?: 'AboutFields_image_Create';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Image_Delete = {
    __typename?: 'AboutFields_image_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Image_Read = {
    __typename?: 'AboutFields_image_Read';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Image_Update = {
    __typename?: 'AboutFields_image_Update';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Pets = {
    __typename?: 'AboutFields_pets';
    create?: Maybe<AboutFields_Pets_Create>;
    delete?: Maybe<AboutFields_Pets_Delete>;
    fields?: Maybe<AboutFields_Pets_Fields>;
    read?: Maybe<AboutFields_Pets_Read>;
    update?: Maybe<AboutFields_Pets_Update>;
};

export type AboutFields_Pets_Create = {
    __typename?: 'AboutFields_pets_Create';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Pets_Delete = {
    __typename?: 'AboutFields_pets_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Pets_Fields = {
    __typename?: 'AboutFields_pets_Fields';
    athena?: Maybe<AboutFields_Pets_Athena>;
    harvey?: Maybe<AboutFields_Pets_Harvey>;
    jasper?: Maybe<AboutFields_Pets_Jasper>;
    warren?: Maybe<AboutFields_Pets_Warren>;
};

export type AboutFields_Pets_Read = {
    __typename?: 'AboutFields_pets_Read';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Pets_Update = {
    __typename?: 'AboutFields_pets_Update';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Pets_Athena = {
    __typename?: 'AboutFields_pets_athena';
    create?: Maybe<AboutFields_Pets_Athena_Create>;
    delete?: Maybe<AboutFields_Pets_Athena_Delete>;
    read?: Maybe<AboutFields_Pets_Athena_Read>;
    update?: Maybe<AboutFields_Pets_Athena_Update>;
};

export type AboutFields_Pets_Athena_Create = {
    __typename?: 'AboutFields_pets_athena_Create';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Pets_Athena_Delete = {
    __typename?: 'AboutFields_pets_athena_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Pets_Athena_Read = {
    __typename?: 'AboutFields_pets_athena_Read';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Pets_Athena_Update = {
    __typename?: 'AboutFields_pets_athena_Update';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Pets_Harvey = {
    __typename?: 'AboutFields_pets_harvey';
    create?: Maybe<AboutFields_Pets_Harvey_Create>;
    delete?: Maybe<AboutFields_Pets_Harvey_Delete>;
    read?: Maybe<AboutFields_Pets_Harvey_Read>;
    update?: Maybe<AboutFields_Pets_Harvey_Update>;
};

export type AboutFields_Pets_Harvey_Create = {
    __typename?: 'AboutFields_pets_harvey_Create';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Pets_Harvey_Delete = {
    __typename?: 'AboutFields_pets_harvey_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Pets_Harvey_Read = {
    __typename?: 'AboutFields_pets_harvey_Read';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Pets_Harvey_Update = {
    __typename?: 'AboutFields_pets_harvey_Update';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Pets_Jasper = {
    __typename?: 'AboutFields_pets_jasper';
    create?: Maybe<AboutFields_Pets_Jasper_Create>;
    delete?: Maybe<AboutFields_Pets_Jasper_Delete>;
    read?: Maybe<AboutFields_Pets_Jasper_Read>;
    update?: Maybe<AboutFields_Pets_Jasper_Update>;
};

export type AboutFields_Pets_Jasper_Create = {
    __typename?: 'AboutFields_pets_jasper_Create';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Pets_Jasper_Delete = {
    __typename?: 'AboutFields_pets_jasper_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Pets_Jasper_Read = {
    __typename?: 'AboutFields_pets_jasper_Read';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Pets_Jasper_Update = {
    __typename?: 'AboutFields_pets_jasper_Update';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Pets_Warren = {
    __typename?: 'AboutFields_pets_warren';
    create?: Maybe<AboutFields_Pets_Warren_Create>;
    delete?: Maybe<AboutFields_Pets_Warren_Delete>;
    read?: Maybe<AboutFields_Pets_Warren_Read>;
    update?: Maybe<AboutFields_Pets_Warren_Update>;
};

export type AboutFields_Pets_Warren_Create = {
    __typename?: 'AboutFields_pets_warren_Create';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Pets_Warren_Delete = {
    __typename?: 'AboutFields_pets_warren_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Pets_Warren_Read = {
    __typename?: 'AboutFields_pets_warren_Read';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Pets_Warren_Update = {
    __typename?: 'AboutFields_pets_warren_Update';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Text = {
    __typename?: 'AboutFields_text';
    create?: Maybe<AboutFields_Text_Create>;
    delete?: Maybe<AboutFields_Text_Delete>;
    read?: Maybe<AboutFields_Text_Read>;
    update?: Maybe<AboutFields_Text_Update>;
};

export type AboutFields_Text_Create = {
    __typename?: 'AboutFields_text_Create';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Text_Delete = {
    __typename?: 'AboutFields_text_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Text_Read = {
    __typename?: 'AboutFields_text_Read';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Text_Update = {
    __typename?: 'AboutFields_text_Update';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Title = {
    __typename?: 'AboutFields_title';
    create?: Maybe<AboutFields_Title_Create>;
    delete?: Maybe<AboutFields_Title_Delete>;
    read?: Maybe<AboutFields_Title_Read>;
    update?: Maybe<AboutFields_Title_Update>;
};

export type AboutFields_Title_Create = {
    __typename?: 'AboutFields_title_Create';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Title_Delete = {
    __typename?: 'AboutFields_title_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Title_Read = {
    __typename?: 'AboutFields_title_Read';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_Title_Update = {
    __typename?: 'AboutFields_title_Update';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_UpdatedAt = {
    __typename?: 'AboutFields_updatedAt';
    create?: Maybe<AboutFields_UpdatedAt_Create>;
    delete?: Maybe<AboutFields_UpdatedAt_Delete>;
    read?: Maybe<AboutFields_UpdatedAt_Read>;
    update?: Maybe<AboutFields_UpdatedAt_Update>;
};

export type AboutFields_UpdatedAt_Create = {
    __typename?: 'AboutFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_UpdatedAt_Delete = {
    __typename?: 'AboutFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_UpdatedAt_Read = {
    __typename?: 'AboutFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type AboutFields_UpdatedAt_Update = {
    __typename?: 'AboutFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type AboutReadAccess = {
    __typename?: 'AboutReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AboutReadDocAccess = {
    __typename?: 'AboutReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AboutUpdateAccess = {
    __typename?: 'AboutUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AboutUpdateDocAccess = {
    __typename?: 'AboutUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type About_Image_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Image_Base64_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Image_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type About_Image_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Image_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type About_Image_Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type About_Image_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Image_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Image_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Image_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type About_Image_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type About_Image_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Image_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Image_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type About_Image_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type About_Image_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Image_Where = {
    AND?: InputMaybe<Array<InputMaybe<About_Image_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<About_Image_Where_Or>>>;
    alt?: InputMaybe<About_Image_Alt_Operator>;
    base64?: InputMaybe<About_Image_Base64_Operator>;
    createdAt?: InputMaybe<About_Image_CreatedAt_Operator>;
    filename?: InputMaybe<About_Image_Filename_Operator>;
    filesize?: InputMaybe<About_Image_Filesize_Operator>;
    height?: InputMaybe<About_Image_Height_Operator>;
    id?: InputMaybe<About_Image_Id_Operator>;
    mimeType?: InputMaybe<About_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<About_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<About_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<About_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<About_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<About_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<About_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<About_Image_UpdatedAt_Operator>;
    url?: InputMaybe<About_Image_Url_Operator>;
    width?: InputMaybe<About_Image_Width_Operator>;
};

export type About_Image_Where_And = {
    alt?: InputMaybe<About_Image_Alt_Operator>;
    base64?: InputMaybe<About_Image_Base64_Operator>;
    createdAt?: InputMaybe<About_Image_CreatedAt_Operator>;
    filename?: InputMaybe<About_Image_Filename_Operator>;
    filesize?: InputMaybe<About_Image_Filesize_Operator>;
    height?: InputMaybe<About_Image_Height_Operator>;
    id?: InputMaybe<About_Image_Id_Operator>;
    mimeType?: InputMaybe<About_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<About_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<About_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<About_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<About_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<About_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<About_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<About_Image_UpdatedAt_Operator>;
    url?: InputMaybe<About_Image_Url_Operator>;
    width?: InputMaybe<About_Image_Width_Operator>;
};

export type About_Image_Where_Or = {
    alt?: InputMaybe<About_Image_Alt_Operator>;
    base64?: InputMaybe<About_Image_Base64_Operator>;
    createdAt?: InputMaybe<About_Image_CreatedAt_Operator>;
    filename?: InputMaybe<About_Image_Filename_Operator>;
    filesize?: InputMaybe<About_Image_Filesize_Operator>;
    height?: InputMaybe<About_Image_Height_Operator>;
    id?: InputMaybe<About_Image_Id_Operator>;
    mimeType?: InputMaybe<About_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<About_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<About_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<About_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<About_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<About_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<About_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<About_Image_UpdatedAt_Operator>;
    url?: InputMaybe<About_Image_Url_Operator>;
    width?: InputMaybe<About_Image_Width_Operator>;
};

export type About_Image_Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type About_Pets = {
    __typename?: 'About_Pets';
    athena?: Maybe<Image>;
    harvey?: Maybe<Image>;
    jasper?: Maybe<Image>;
    warren?: Maybe<Image>;
};

export type About_PetsAthenaArgs = {
    where?: InputMaybe<About_Pets_Athena_Where>;
};

export type About_PetsHarveyArgs = {
    where?: InputMaybe<About_Pets_Harvey_Where>;
};

export type About_PetsJasperArgs = {
    where?: InputMaybe<About_Pets_Jasper_Where>;
};

export type About_PetsWarrenArgs = {
    where?: InputMaybe<About_Pets_Warren_Where>;
};

export type About_Pets_Athena_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Athena_Base64_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Athena_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type About_Pets_Athena_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Athena_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type About_Pets_Athena_Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type About_Pets_Athena_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Athena_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Athena_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Athena_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type About_Pets_Athena_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type About_Pets_Athena_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Athena_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Athena_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type About_Pets_Athena_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type About_Pets_Athena_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Athena_Where = {
    AND?: InputMaybe<Array<InputMaybe<About_Pets_Athena_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<About_Pets_Athena_Where_Or>>>;
    alt?: InputMaybe<About_Pets_Athena_Alt_Operator>;
    base64?: InputMaybe<About_Pets_Athena_Base64_Operator>;
    createdAt?: InputMaybe<About_Pets_Athena_CreatedAt_Operator>;
    filename?: InputMaybe<About_Pets_Athena_Filename_Operator>;
    filesize?: InputMaybe<About_Pets_Athena_Filesize_Operator>;
    height?: InputMaybe<About_Pets_Athena_Height_Operator>;
    id?: InputMaybe<About_Pets_Athena_Id_Operator>;
    mimeType?: InputMaybe<About_Pets_Athena_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<About_Pets_Athena_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<About_Pets_Athena_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<About_Pets_Athena_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<About_Pets_Athena_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<About_Pets_Athena_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<About_Pets_Athena_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<About_Pets_Athena_UpdatedAt_Operator>;
    url?: InputMaybe<About_Pets_Athena_Url_Operator>;
    width?: InputMaybe<About_Pets_Athena_Width_Operator>;
};

export type About_Pets_Athena_Where_And = {
    alt?: InputMaybe<About_Pets_Athena_Alt_Operator>;
    base64?: InputMaybe<About_Pets_Athena_Base64_Operator>;
    createdAt?: InputMaybe<About_Pets_Athena_CreatedAt_Operator>;
    filename?: InputMaybe<About_Pets_Athena_Filename_Operator>;
    filesize?: InputMaybe<About_Pets_Athena_Filesize_Operator>;
    height?: InputMaybe<About_Pets_Athena_Height_Operator>;
    id?: InputMaybe<About_Pets_Athena_Id_Operator>;
    mimeType?: InputMaybe<About_Pets_Athena_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<About_Pets_Athena_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<About_Pets_Athena_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<About_Pets_Athena_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<About_Pets_Athena_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<About_Pets_Athena_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<About_Pets_Athena_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<About_Pets_Athena_UpdatedAt_Operator>;
    url?: InputMaybe<About_Pets_Athena_Url_Operator>;
    width?: InputMaybe<About_Pets_Athena_Width_Operator>;
};

export type About_Pets_Athena_Where_Or = {
    alt?: InputMaybe<About_Pets_Athena_Alt_Operator>;
    base64?: InputMaybe<About_Pets_Athena_Base64_Operator>;
    createdAt?: InputMaybe<About_Pets_Athena_CreatedAt_Operator>;
    filename?: InputMaybe<About_Pets_Athena_Filename_Operator>;
    filesize?: InputMaybe<About_Pets_Athena_Filesize_Operator>;
    height?: InputMaybe<About_Pets_Athena_Height_Operator>;
    id?: InputMaybe<About_Pets_Athena_Id_Operator>;
    mimeType?: InputMaybe<About_Pets_Athena_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<About_Pets_Athena_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<About_Pets_Athena_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<About_Pets_Athena_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<About_Pets_Athena_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<About_Pets_Athena_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<About_Pets_Athena_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<About_Pets_Athena_UpdatedAt_Operator>;
    url?: InputMaybe<About_Pets_Athena_Url_Operator>;
    width?: InputMaybe<About_Pets_Athena_Width_Operator>;
};

export type About_Pets_Athena_Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type About_Pets_Harvey_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Harvey_Base64_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Harvey_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type About_Pets_Harvey_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Harvey_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type About_Pets_Harvey_Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type About_Pets_Harvey_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Harvey_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Harvey_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Harvey_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type About_Pets_Harvey_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type About_Pets_Harvey_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Harvey_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Harvey_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type About_Pets_Harvey_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type About_Pets_Harvey_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Harvey_Where = {
    AND?: InputMaybe<Array<InputMaybe<About_Pets_Harvey_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<About_Pets_Harvey_Where_Or>>>;
    alt?: InputMaybe<About_Pets_Harvey_Alt_Operator>;
    base64?: InputMaybe<About_Pets_Harvey_Base64_Operator>;
    createdAt?: InputMaybe<About_Pets_Harvey_CreatedAt_Operator>;
    filename?: InputMaybe<About_Pets_Harvey_Filename_Operator>;
    filesize?: InputMaybe<About_Pets_Harvey_Filesize_Operator>;
    height?: InputMaybe<About_Pets_Harvey_Height_Operator>;
    id?: InputMaybe<About_Pets_Harvey_Id_Operator>;
    mimeType?: InputMaybe<About_Pets_Harvey_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<About_Pets_Harvey_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<About_Pets_Harvey_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<About_Pets_Harvey_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<About_Pets_Harvey_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<About_Pets_Harvey_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<About_Pets_Harvey_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<About_Pets_Harvey_UpdatedAt_Operator>;
    url?: InputMaybe<About_Pets_Harvey_Url_Operator>;
    width?: InputMaybe<About_Pets_Harvey_Width_Operator>;
};

export type About_Pets_Harvey_Where_And = {
    alt?: InputMaybe<About_Pets_Harvey_Alt_Operator>;
    base64?: InputMaybe<About_Pets_Harvey_Base64_Operator>;
    createdAt?: InputMaybe<About_Pets_Harvey_CreatedAt_Operator>;
    filename?: InputMaybe<About_Pets_Harvey_Filename_Operator>;
    filesize?: InputMaybe<About_Pets_Harvey_Filesize_Operator>;
    height?: InputMaybe<About_Pets_Harvey_Height_Operator>;
    id?: InputMaybe<About_Pets_Harvey_Id_Operator>;
    mimeType?: InputMaybe<About_Pets_Harvey_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<About_Pets_Harvey_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<About_Pets_Harvey_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<About_Pets_Harvey_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<About_Pets_Harvey_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<About_Pets_Harvey_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<About_Pets_Harvey_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<About_Pets_Harvey_UpdatedAt_Operator>;
    url?: InputMaybe<About_Pets_Harvey_Url_Operator>;
    width?: InputMaybe<About_Pets_Harvey_Width_Operator>;
};

export type About_Pets_Harvey_Where_Or = {
    alt?: InputMaybe<About_Pets_Harvey_Alt_Operator>;
    base64?: InputMaybe<About_Pets_Harvey_Base64_Operator>;
    createdAt?: InputMaybe<About_Pets_Harvey_CreatedAt_Operator>;
    filename?: InputMaybe<About_Pets_Harvey_Filename_Operator>;
    filesize?: InputMaybe<About_Pets_Harvey_Filesize_Operator>;
    height?: InputMaybe<About_Pets_Harvey_Height_Operator>;
    id?: InputMaybe<About_Pets_Harvey_Id_Operator>;
    mimeType?: InputMaybe<About_Pets_Harvey_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<About_Pets_Harvey_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<About_Pets_Harvey_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<About_Pets_Harvey_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<About_Pets_Harvey_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<About_Pets_Harvey_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<About_Pets_Harvey_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<About_Pets_Harvey_UpdatedAt_Operator>;
    url?: InputMaybe<About_Pets_Harvey_Url_Operator>;
    width?: InputMaybe<About_Pets_Harvey_Width_Operator>;
};

export type About_Pets_Harvey_Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type About_Pets_Jasper_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Jasper_Base64_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Jasper_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type About_Pets_Jasper_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Jasper_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type About_Pets_Jasper_Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type About_Pets_Jasper_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Jasper_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Jasper_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Jasper_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type About_Pets_Jasper_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type About_Pets_Jasper_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Jasper_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Jasper_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type About_Pets_Jasper_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type About_Pets_Jasper_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Jasper_Where = {
    AND?: InputMaybe<Array<InputMaybe<About_Pets_Jasper_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<About_Pets_Jasper_Where_Or>>>;
    alt?: InputMaybe<About_Pets_Jasper_Alt_Operator>;
    base64?: InputMaybe<About_Pets_Jasper_Base64_Operator>;
    createdAt?: InputMaybe<About_Pets_Jasper_CreatedAt_Operator>;
    filename?: InputMaybe<About_Pets_Jasper_Filename_Operator>;
    filesize?: InputMaybe<About_Pets_Jasper_Filesize_Operator>;
    height?: InputMaybe<About_Pets_Jasper_Height_Operator>;
    id?: InputMaybe<About_Pets_Jasper_Id_Operator>;
    mimeType?: InputMaybe<About_Pets_Jasper_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<About_Pets_Jasper_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<About_Pets_Jasper_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<About_Pets_Jasper_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<About_Pets_Jasper_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<About_Pets_Jasper_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<About_Pets_Jasper_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<About_Pets_Jasper_UpdatedAt_Operator>;
    url?: InputMaybe<About_Pets_Jasper_Url_Operator>;
    width?: InputMaybe<About_Pets_Jasper_Width_Operator>;
};

export type About_Pets_Jasper_Where_And = {
    alt?: InputMaybe<About_Pets_Jasper_Alt_Operator>;
    base64?: InputMaybe<About_Pets_Jasper_Base64_Operator>;
    createdAt?: InputMaybe<About_Pets_Jasper_CreatedAt_Operator>;
    filename?: InputMaybe<About_Pets_Jasper_Filename_Operator>;
    filesize?: InputMaybe<About_Pets_Jasper_Filesize_Operator>;
    height?: InputMaybe<About_Pets_Jasper_Height_Operator>;
    id?: InputMaybe<About_Pets_Jasper_Id_Operator>;
    mimeType?: InputMaybe<About_Pets_Jasper_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<About_Pets_Jasper_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<About_Pets_Jasper_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<About_Pets_Jasper_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<About_Pets_Jasper_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<About_Pets_Jasper_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<About_Pets_Jasper_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<About_Pets_Jasper_UpdatedAt_Operator>;
    url?: InputMaybe<About_Pets_Jasper_Url_Operator>;
    width?: InputMaybe<About_Pets_Jasper_Width_Operator>;
};

export type About_Pets_Jasper_Where_Or = {
    alt?: InputMaybe<About_Pets_Jasper_Alt_Operator>;
    base64?: InputMaybe<About_Pets_Jasper_Base64_Operator>;
    createdAt?: InputMaybe<About_Pets_Jasper_CreatedAt_Operator>;
    filename?: InputMaybe<About_Pets_Jasper_Filename_Operator>;
    filesize?: InputMaybe<About_Pets_Jasper_Filesize_Operator>;
    height?: InputMaybe<About_Pets_Jasper_Height_Operator>;
    id?: InputMaybe<About_Pets_Jasper_Id_Operator>;
    mimeType?: InputMaybe<About_Pets_Jasper_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<About_Pets_Jasper_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<About_Pets_Jasper_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<About_Pets_Jasper_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<About_Pets_Jasper_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<About_Pets_Jasper_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<About_Pets_Jasper_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<About_Pets_Jasper_UpdatedAt_Operator>;
    url?: InputMaybe<About_Pets_Jasper_Url_Operator>;
    width?: InputMaybe<About_Pets_Jasper_Width_Operator>;
};

export type About_Pets_Jasper_Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type About_Pets_Warren_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Warren_Base64_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Warren_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type About_Pets_Warren_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Warren_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type About_Pets_Warren_Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type About_Pets_Warren_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Warren_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Warren_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Warren_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type About_Pets_Warren_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type About_Pets_Warren_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Warren_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Warren_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type About_Pets_Warren_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type About_Pets_Warren_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type About_Pets_Warren_Where = {
    AND?: InputMaybe<Array<InputMaybe<About_Pets_Warren_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<About_Pets_Warren_Where_Or>>>;
    alt?: InputMaybe<About_Pets_Warren_Alt_Operator>;
    base64?: InputMaybe<About_Pets_Warren_Base64_Operator>;
    createdAt?: InputMaybe<About_Pets_Warren_CreatedAt_Operator>;
    filename?: InputMaybe<About_Pets_Warren_Filename_Operator>;
    filesize?: InputMaybe<About_Pets_Warren_Filesize_Operator>;
    height?: InputMaybe<About_Pets_Warren_Height_Operator>;
    id?: InputMaybe<About_Pets_Warren_Id_Operator>;
    mimeType?: InputMaybe<About_Pets_Warren_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<About_Pets_Warren_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<About_Pets_Warren_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<About_Pets_Warren_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<About_Pets_Warren_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<About_Pets_Warren_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<About_Pets_Warren_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<About_Pets_Warren_UpdatedAt_Operator>;
    url?: InputMaybe<About_Pets_Warren_Url_Operator>;
    width?: InputMaybe<About_Pets_Warren_Width_Operator>;
};

export type About_Pets_Warren_Where_And = {
    alt?: InputMaybe<About_Pets_Warren_Alt_Operator>;
    base64?: InputMaybe<About_Pets_Warren_Base64_Operator>;
    createdAt?: InputMaybe<About_Pets_Warren_CreatedAt_Operator>;
    filename?: InputMaybe<About_Pets_Warren_Filename_Operator>;
    filesize?: InputMaybe<About_Pets_Warren_Filesize_Operator>;
    height?: InputMaybe<About_Pets_Warren_Height_Operator>;
    id?: InputMaybe<About_Pets_Warren_Id_Operator>;
    mimeType?: InputMaybe<About_Pets_Warren_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<About_Pets_Warren_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<About_Pets_Warren_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<About_Pets_Warren_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<About_Pets_Warren_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<About_Pets_Warren_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<About_Pets_Warren_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<About_Pets_Warren_UpdatedAt_Operator>;
    url?: InputMaybe<About_Pets_Warren_Url_Operator>;
    width?: InputMaybe<About_Pets_Warren_Width_Operator>;
};

export type About_Pets_Warren_Where_Or = {
    alt?: InputMaybe<About_Pets_Warren_Alt_Operator>;
    base64?: InputMaybe<About_Pets_Warren_Base64_Operator>;
    createdAt?: InputMaybe<About_Pets_Warren_CreatedAt_Operator>;
    filename?: InputMaybe<About_Pets_Warren_Filename_Operator>;
    filesize?: InputMaybe<About_Pets_Warren_Filesize_Operator>;
    height?: InputMaybe<About_Pets_Warren_Height_Operator>;
    id?: InputMaybe<About_Pets_Warren_Id_Operator>;
    mimeType?: InputMaybe<About_Pets_Warren_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<About_Pets_Warren_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<About_Pets_Warren_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<About_Pets_Warren_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<About_Pets_Warren_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<About_Pets_Warren_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<About_Pets_Warren_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<About_Pets_Warren_UpdatedAt_Operator>;
    url?: InputMaybe<About_Pets_Warren_Url_Operator>;
    width?: InputMaybe<About_Pets_Warren_Width_Operator>;
};

export type About_Pets_Warren_Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Access = {
    __typename?: 'Access';
    about?: Maybe<AboutAccess>;
    canAccessAdmin: Scalars['Boolean']['output'];
    case_studies?: Maybe<Case_StudiesAccess>;
    case_study_listing?: Maybe<Case_Study_ListingAccess>;
    ctas?: Maybe<CtasAccess>;
    heroes?: Maybe<HeroesAccess>;
    icons?: Maybe<IconsAccess>;
    images?: Maybe<ImagesAccess>;
    nav?: Maybe<NavAccess>;
    pages?: Maybe<PagesAccess>;
    projects?: Maybe<ProjectsAccess>;
    socials?: Maybe<SocialsAccess>;
    testimonial_listing?: Maybe<Testimonial_ListingAccess>;
    testimonials?: Maybe<TestimonialsAccess>;
    toolbox_listing?: Maybe<Toolbox_ListingAccess>;
    tools?: Maybe<ToolsAccess>;
    users?: Maybe<UsersAccess>;
};

export type CaseStudies = {
    __typename?: 'CaseStudies';
    docs?: Maybe<Array<Maybe<CaseStudy>>>;
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

export type CaseStudiesCreateAccess = {
    __typename?: 'CaseStudiesCreateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CaseStudiesCreateDocAccess = {
    __typename?: 'CaseStudiesCreateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CaseStudiesDeleteAccess = {
    __typename?: 'CaseStudiesDeleteAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CaseStudiesDeleteDocAccess = {
    __typename?: 'CaseStudiesDeleteDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CaseStudiesDocAccessFields = {
    __typename?: 'CaseStudiesDocAccessFields';
    caseStudySections?: Maybe<CaseStudiesDocAccessFields_CaseStudySections>;
    createdAt?: Maybe<CaseStudiesDocAccessFields_CreatedAt>;
    excerpt?: Maybe<CaseStudiesDocAccessFields_Excerpt>;
    featuredImage?: Maybe<CaseStudiesDocAccessFields_FeaturedImage>;
    internalTitle?: Maybe<CaseStudiesDocAccessFields_InternalTitle>;
    intro?: Maybe<CaseStudiesDocAccessFields_Intro>;
    meta?: Maybe<CaseStudiesDocAccessFields_Meta>;
    slug?: Maybe<CaseStudiesDocAccessFields_Slug>;
    title?: Maybe<CaseStudiesDocAccessFields_Title>;
    updatedAt?: Maybe<CaseStudiesDocAccessFields_UpdatedAt>;
};

export type CaseStudiesDocAccessFields_CaseStudySections = {
    __typename?: 'CaseStudiesDocAccessFields_caseStudySections';
    create?: Maybe<CaseStudiesDocAccessFields_CaseStudySections_Create>;
    delete?: Maybe<CaseStudiesDocAccessFields_CaseStudySections_Delete>;
    read?: Maybe<CaseStudiesDocAccessFields_CaseStudySections_Read>;
    update?: Maybe<CaseStudiesDocAccessFields_CaseStudySections_Update>;
};

export type CaseStudiesDocAccessFields_CaseStudySections_Create = {
    __typename?: 'CaseStudiesDocAccessFields_caseStudySections_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_CaseStudySections_Delete = {
    __typename?: 'CaseStudiesDocAccessFields_caseStudySections_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_CaseStudySections_Read = {
    __typename?: 'CaseStudiesDocAccessFields_caseStudySections_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_CaseStudySections_Update = {
    __typename?: 'CaseStudiesDocAccessFields_caseStudySections_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_CreatedAt = {
    __typename?: 'CaseStudiesDocAccessFields_createdAt';
    create?: Maybe<CaseStudiesDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<CaseStudiesDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<CaseStudiesDocAccessFields_CreatedAt_Read>;
    update?: Maybe<CaseStudiesDocAccessFields_CreatedAt_Update>;
};

export type CaseStudiesDocAccessFields_CreatedAt_Create = {
    __typename?: 'CaseStudiesDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_CreatedAt_Delete = {
    __typename?: 'CaseStudiesDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_CreatedAt_Read = {
    __typename?: 'CaseStudiesDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_CreatedAt_Update = {
    __typename?: 'CaseStudiesDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Excerpt = {
    __typename?: 'CaseStudiesDocAccessFields_excerpt';
    create?: Maybe<CaseStudiesDocAccessFields_Excerpt_Create>;
    delete?: Maybe<CaseStudiesDocAccessFields_Excerpt_Delete>;
    read?: Maybe<CaseStudiesDocAccessFields_Excerpt_Read>;
    update?: Maybe<CaseStudiesDocAccessFields_Excerpt_Update>;
};

export type CaseStudiesDocAccessFields_Excerpt_Create = {
    __typename?: 'CaseStudiesDocAccessFields_excerpt_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Excerpt_Delete = {
    __typename?: 'CaseStudiesDocAccessFields_excerpt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Excerpt_Read = {
    __typename?: 'CaseStudiesDocAccessFields_excerpt_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Excerpt_Update = {
    __typename?: 'CaseStudiesDocAccessFields_excerpt_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_FeaturedImage = {
    __typename?: 'CaseStudiesDocAccessFields_featuredImage';
    create?: Maybe<CaseStudiesDocAccessFields_FeaturedImage_Create>;
    delete?: Maybe<CaseStudiesDocAccessFields_FeaturedImage_Delete>;
    read?: Maybe<CaseStudiesDocAccessFields_FeaturedImage_Read>;
    update?: Maybe<CaseStudiesDocAccessFields_FeaturedImage_Update>;
};

export type CaseStudiesDocAccessFields_FeaturedImage_Create = {
    __typename?: 'CaseStudiesDocAccessFields_featuredImage_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_FeaturedImage_Delete = {
    __typename?: 'CaseStudiesDocAccessFields_featuredImage_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_FeaturedImage_Read = {
    __typename?: 'CaseStudiesDocAccessFields_featuredImage_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_FeaturedImage_Update = {
    __typename?: 'CaseStudiesDocAccessFields_featuredImage_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_InternalTitle = {
    __typename?: 'CaseStudiesDocAccessFields_internalTitle';
    create?: Maybe<CaseStudiesDocAccessFields_InternalTitle_Create>;
    delete?: Maybe<CaseStudiesDocAccessFields_InternalTitle_Delete>;
    read?: Maybe<CaseStudiesDocAccessFields_InternalTitle_Read>;
    update?: Maybe<CaseStudiesDocAccessFields_InternalTitle_Update>;
};

export type CaseStudiesDocAccessFields_InternalTitle_Create = {
    __typename?: 'CaseStudiesDocAccessFields_internalTitle_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_InternalTitle_Delete = {
    __typename?: 'CaseStudiesDocAccessFields_internalTitle_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_InternalTitle_Read = {
    __typename?: 'CaseStudiesDocAccessFields_internalTitle_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_InternalTitle_Update = {
    __typename?: 'CaseStudiesDocAccessFields_internalTitle_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Intro = {
    __typename?: 'CaseStudiesDocAccessFields_intro';
    create?: Maybe<CaseStudiesDocAccessFields_Intro_Create>;
    delete?: Maybe<CaseStudiesDocAccessFields_Intro_Delete>;
    fields?: Maybe<CaseStudiesDocAccessFields_Intro_Fields>;
    read?: Maybe<CaseStudiesDocAccessFields_Intro_Read>;
    update?: Maybe<CaseStudiesDocAccessFields_Intro_Update>;
};

export type CaseStudiesDocAccessFields_Intro_Create = {
    __typename?: 'CaseStudiesDocAccessFields_intro_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Intro_Delete = {
    __typename?: 'CaseStudiesDocAccessFields_intro_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Intro_Fields = {
    __typename?: 'CaseStudiesDocAccessFields_intro_Fields';
    cta?: Maybe<CaseStudiesDocAccessFields_Intro_Cta>;
    heading?: Maybe<CaseStudiesDocAccessFields_Intro_Heading>;
    image?: Maybe<CaseStudiesDocAccessFields_Intro_Image>;
    text?: Maybe<CaseStudiesDocAccessFields_Intro_Text>;
};

export type CaseStudiesDocAccessFields_Intro_Read = {
    __typename?: 'CaseStudiesDocAccessFields_intro_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Intro_Update = {
    __typename?: 'CaseStudiesDocAccessFields_intro_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Intro_Cta = {
    __typename?: 'CaseStudiesDocAccessFields_intro_cta';
    create?: Maybe<CaseStudiesDocAccessFields_Intro_Cta_Create>;
    delete?: Maybe<CaseStudiesDocAccessFields_Intro_Cta_Delete>;
    read?: Maybe<CaseStudiesDocAccessFields_Intro_Cta_Read>;
    update?: Maybe<CaseStudiesDocAccessFields_Intro_Cta_Update>;
};

export type CaseStudiesDocAccessFields_Intro_Cta_Create = {
    __typename?: 'CaseStudiesDocAccessFields_intro_cta_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Intro_Cta_Delete = {
    __typename?: 'CaseStudiesDocAccessFields_intro_cta_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Intro_Cta_Read = {
    __typename?: 'CaseStudiesDocAccessFields_intro_cta_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Intro_Cta_Update = {
    __typename?: 'CaseStudiesDocAccessFields_intro_cta_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Intro_Heading = {
    __typename?: 'CaseStudiesDocAccessFields_intro_heading';
    create?: Maybe<CaseStudiesDocAccessFields_Intro_Heading_Create>;
    delete?: Maybe<CaseStudiesDocAccessFields_Intro_Heading_Delete>;
    read?: Maybe<CaseStudiesDocAccessFields_Intro_Heading_Read>;
    update?: Maybe<CaseStudiesDocAccessFields_Intro_Heading_Update>;
};

export type CaseStudiesDocAccessFields_Intro_Heading_Create = {
    __typename?: 'CaseStudiesDocAccessFields_intro_heading_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Intro_Heading_Delete = {
    __typename?: 'CaseStudiesDocAccessFields_intro_heading_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Intro_Heading_Read = {
    __typename?: 'CaseStudiesDocAccessFields_intro_heading_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Intro_Heading_Update = {
    __typename?: 'CaseStudiesDocAccessFields_intro_heading_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Intro_Image = {
    __typename?: 'CaseStudiesDocAccessFields_intro_image';
    create?: Maybe<CaseStudiesDocAccessFields_Intro_Image_Create>;
    delete?: Maybe<CaseStudiesDocAccessFields_Intro_Image_Delete>;
    read?: Maybe<CaseStudiesDocAccessFields_Intro_Image_Read>;
    update?: Maybe<CaseStudiesDocAccessFields_Intro_Image_Update>;
};

export type CaseStudiesDocAccessFields_Intro_Image_Create = {
    __typename?: 'CaseStudiesDocAccessFields_intro_image_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Intro_Image_Delete = {
    __typename?: 'CaseStudiesDocAccessFields_intro_image_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Intro_Image_Read = {
    __typename?: 'CaseStudiesDocAccessFields_intro_image_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Intro_Image_Update = {
    __typename?: 'CaseStudiesDocAccessFields_intro_image_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Intro_Text = {
    __typename?: 'CaseStudiesDocAccessFields_intro_text';
    create?: Maybe<CaseStudiesDocAccessFields_Intro_Text_Create>;
    delete?: Maybe<CaseStudiesDocAccessFields_Intro_Text_Delete>;
    read?: Maybe<CaseStudiesDocAccessFields_Intro_Text_Read>;
    update?: Maybe<CaseStudiesDocAccessFields_Intro_Text_Update>;
};

export type CaseStudiesDocAccessFields_Intro_Text_Create = {
    __typename?: 'CaseStudiesDocAccessFields_intro_text_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Intro_Text_Delete = {
    __typename?: 'CaseStudiesDocAccessFields_intro_text_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Intro_Text_Read = {
    __typename?: 'CaseStudiesDocAccessFields_intro_text_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Intro_Text_Update = {
    __typename?: 'CaseStudiesDocAccessFields_intro_text_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta = {
    __typename?: 'CaseStudiesDocAccessFields_meta';
    create?: Maybe<CaseStudiesDocAccessFields_Meta_Create>;
    delete?: Maybe<CaseStudiesDocAccessFields_Meta_Delete>;
    fields?: Maybe<CaseStudiesDocAccessFields_Meta_Fields>;
    read?: Maybe<CaseStudiesDocAccessFields_Meta_Read>;
    update?: Maybe<CaseStudiesDocAccessFields_Meta_Update>;
};

export type CaseStudiesDocAccessFields_Meta_Create = {
    __typename?: 'CaseStudiesDocAccessFields_meta_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Delete = {
    __typename?: 'CaseStudiesDocAccessFields_meta_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Fields = {
    __typename?: 'CaseStudiesDocAccessFields_meta_Fields';
    description?: Maybe<CaseStudiesDocAccessFields_Meta_Description>;
    image?: Maybe<CaseStudiesDocAccessFields_Meta_Image>;
    noIndex?: Maybe<CaseStudiesDocAccessFields_Meta_NoIndex>;
    overview?: Maybe<CaseStudiesDocAccessFields_Meta_Overview>;
    preview?: Maybe<CaseStudiesDocAccessFields_Meta_Preview>;
    title?: Maybe<CaseStudiesDocAccessFields_Meta_Title>;
};

export type CaseStudiesDocAccessFields_Meta_Read = {
    __typename?: 'CaseStudiesDocAccessFields_meta_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Update = {
    __typename?: 'CaseStudiesDocAccessFields_meta_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Description = {
    __typename?: 'CaseStudiesDocAccessFields_meta_description';
    create?: Maybe<CaseStudiesDocAccessFields_Meta_Description_Create>;
    delete?: Maybe<CaseStudiesDocAccessFields_Meta_Description_Delete>;
    read?: Maybe<CaseStudiesDocAccessFields_Meta_Description_Read>;
    update?: Maybe<CaseStudiesDocAccessFields_Meta_Description_Update>;
};

export type CaseStudiesDocAccessFields_Meta_Description_Create = {
    __typename?: 'CaseStudiesDocAccessFields_meta_description_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Description_Delete = {
    __typename?: 'CaseStudiesDocAccessFields_meta_description_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Description_Read = {
    __typename?: 'CaseStudiesDocAccessFields_meta_description_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Description_Update = {
    __typename?: 'CaseStudiesDocAccessFields_meta_description_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Image = {
    __typename?: 'CaseStudiesDocAccessFields_meta_image';
    create?: Maybe<CaseStudiesDocAccessFields_Meta_Image_Create>;
    delete?: Maybe<CaseStudiesDocAccessFields_Meta_Image_Delete>;
    read?: Maybe<CaseStudiesDocAccessFields_Meta_Image_Read>;
    update?: Maybe<CaseStudiesDocAccessFields_Meta_Image_Update>;
};

export type CaseStudiesDocAccessFields_Meta_Image_Create = {
    __typename?: 'CaseStudiesDocAccessFields_meta_image_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Image_Delete = {
    __typename?: 'CaseStudiesDocAccessFields_meta_image_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Image_Read = {
    __typename?: 'CaseStudiesDocAccessFields_meta_image_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Image_Update = {
    __typename?: 'CaseStudiesDocAccessFields_meta_image_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_NoIndex = {
    __typename?: 'CaseStudiesDocAccessFields_meta_noIndex';
    create?: Maybe<CaseStudiesDocAccessFields_Meta_NoIndex_Create>;
    delete?: Maybe<CaseStudiesDocAccessFields_Meta_NoIndex_Delete>;
    read?: Maybe<CaseStudiesDocAccessFields_Meta_NoIndex_Read>;
    update?: Maybe<CaseStudiesDocAccessFields_Meta_NoIndex_Update>;
};

export type CaseStudiesDocAccessFields_Meta_NoIndex_Create = {
    __typename?: 'CaseStudiesDocAccessFields_meta_noIndex_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_NoIndex_Delete = {
    __typename?: 'CaseStudiesDocAccessFields_meta_noIndex_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_NoIndex_Read = {
    __typename?: 'CaseStudiesDocAccessFields_meta_noIndex_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_NoIndex_Update = {
    __typename?: 'CaseStudiesDocAccessFields_meta_noIndex_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Overview = {
    __typename?: 'CaseStudiesDocAccessFields_meta_overview';
    create?: Maybe<CaseStudiesDocAccessFields_Meta_Overview_Create>;
    delete?: Maybe<CaseStudiesDocAccessFields_Meta_Overview_Delete>;
    read?: Maybe<CaseStudiesDocAccessFields_Meta_Overview_Read>;
    update?: Maybe<CaseStudiesDocAccessFields_Meta_Overview_Update>;
};

export type CaseStudiesDocAccessFields_Meta_Overview_Create = {
    __typename?: 'CaseStudiesDocAccessFields_meta_overview_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Overview_Delete = {
    __typename?: 'CaseStudiesDocAccessFields_meta_overview_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Overview_Read = {
    __typename?: 'CaseStudiesDocAccessFields_meta_overview_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Overview_Update = {
    __typename?: 'CaseStudiesDocAccessFields_meta_overview_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Preview = {
    __typename?: 'CaseStudiesDocAccessFields_meta_preview';
    create?: Maybe<CaseStudiesDocAccessFields_Meta_Preview_Create>;
    delete?: Maybe<CaseStudiesDocAccessFields_Meta_Preview_Delete>;
    read?: Maybe<CaseStudiesDocAccessFields_Meta_Preview_Read>;
    update?: Maybe<CaseStudiesDocAccessFields_Meta_Preview_Update>;
};

export type CaseStudiesDocAccessFields_Meta_Preview_Create = {
    __typename?: 'CaseStudiesDocAccessFields_meta_preview_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Preview_Delete = {
    __typename?: 'CaseStudiesDocAccessFields_meta_preview_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Preview_Read = {
    __typename?: 'CaseStudiesDocAccessFields_meta_preview_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Preview_Update = {
    __typename?: 'CaseStudiesDocAccessFields_meta_preview_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Title = {
    __typename?: 'CaseStudiesDocAccessFields_meta_title';
    create?: Maybe<CaseStudiesDocAccessFields_Meta_Title_Create>;
    delete?: Maybe<CaseStudiesDocAccessFields_Meta_Title_Delete>;
    read?: Maybe<CaseStudiesDocAccessFields_Meta_Title_Read>;
    update?: Maybe<CaseStudiesDocAccessFields_Meta_Title_Update>;
};

export type CaseStudiesDocAccessFields_Meta_Title_Create = {
    __typename?: 'CaseStudiesDocAccessFields_meta_title_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Title_Delete = {
    __typename?: 'CaseStudiesDocAccessFields_meta_title_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Title_Read = {
    __typename?: 'CaseStudiesDocAccessFields_meta_title_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Meta_Title_Update = {
    __typename?: 'CaseStudiesDocAccessFields_meta_title_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Slug = {
    __typename?: 'CaseStudiesDocAccessFields_slug';
    create?: Maybe<CaseStudiesDocAccessFields_Slug_Create>;
    delete?: Maybe<CaseStudiesDocAccessFields_Slug_Delete>;
    read?: Maybe<CaseStudiesDocAccessFields_Slug_Read>;
    update?: Maybe<CaseStudiesDocAccessFields_Slug_Update>;
};

export type CaseStudiesDocAccessFields_Slug_Create = {
    __typename?: 'CaseStudiesDocAccessFields_slug_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Slug_Delete = {
    __typename?: 'CaseStudiesDocAccessFields_slug_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Slug_Read = {
    __typename?: 'CaseStudiesDocAccessFields_slug_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Slug_Update = {
    __typename?: 'CaseStudiesDocAccessFields_slug_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Title = {
    __typename?: 'CaseStudiesDocAccessFields_title';
    create?: Maybe<CaseStudiesDocAccessFields_Title_Create>;
    delete?: Maybe<CaseStudiesDocAccessFields_Title_Delete>;
    read?: Maybe<CaseStudiesDocAccessFields_Title_Read>;
    update?: Maybe<CaseStudiesDocAccessFields_Title_Update>;
};

export type CaseStudiesDocAccessFields_Title_Create = {
    __typename?: 'CaseStudiesDocAccessFields_title_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Title_Delete = {
    __typename?: 'CaseStudiesDocAccessFields_title_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Title_Read = {
    __typename?: 'CaseStudiesDocAccessFields_title_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_Title_Update = {
    __typename?: 'CaseStudiesDocAccessFields_title_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_UpdatedAt = {
    __typename?: 'CaseStudiesDocAccessFields_updatedAt';
    create?: Maybe<CaseStudiesDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<CaseStudiesDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<CaseStudiesDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<CaseStudiesDocAccessFields_UpdatedAt_Update>;
};

export type CaseStudiesDocAccessFields_UpdatedAt_Create = {
    __typename?: 'CaseStudiesDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'CaseStudiesDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_UpdatedAt_Read = {
    __typename?: 'CaseStudiesDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesDocAccessFields_UpdatedAt_Update = {
    __typename?: 'CaseStudiesDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields = {
    __typename?: 'CaseStudiesFields';
    caseStudySections?: Maybe<CaseStudiesFields_CaseStudySections>;
    createdAt?: Maybe<CaseStudiesFields_CreatedAt>;
    excerpt?: Maybe<CaseStudiesFields_Excerpt>;
    featuredImage?: Maybe<CaseStudiesFields_FeaturedImage>;
    internalTitle?: Maybe<CaseStudiesFields_InternalTitle>;
    intro?: Maybe<CaseStudiesFields_Intro>;
    meta?: Maybe<CaseStudiesFields_Meta>;
    slug?: Maybe<CaseStudiesFields_Slug>;
    title?: Maybe<CaseStudiesFields_Title>;
    updatedAt?: Maybe<CaseStudiesFields_UpdatedAt>;
};

export type CaseStudiesFields_CaseStudySections = {
    __typename?: 'CaseStudiesFields_caseStudySections';
    create?: Maybe<CaseStudiesFields_CaseStudySections_Create>;
    delete?: Maybe<CaseStudiesFields_CaseStudySections_Delete>;
    read?: Maybe<CaseStudiesFields_CaseStudySections_Read>;
    update?: Maybe<CaseStudiesFields_CaseStudySections_Update>;
};

export type CaseStudiesFields_CaseStudySections_Create = {
    __typename?: 'CaseStudiesFields_caseStudySections_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_CaseStudySections_Delete = {
    __typename?: 'CaseStudiesFields_caseStudySections_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_CaseStudySections_Read = {
    __typename?: 'CaseStudiesFields_caseStudySections_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_CaseStudySections_Update = {
    __typename?: 'CaseStudiesFields_caseStudySections_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_CreatedAt = {
    __typename?: 'CaseStudiesFields_createdAt';
    create?: Maybe<CaseStudiesFields_CreatedAt_Create>;
    delete?: Maybe<CaseStudiesFields_CreatedAt_Delete>;
    read?: Maybe<CaseStudiesFields_CreatedAt_Read>;
    update?: Maybe<CaseStudiesFields_CreatedAt_Update>;
};

export type CaseStudiesFields_CreatedAt_Create = {
    __typename?: 'CaseStudiesFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_CreatedAt_Delete = {
    __typename?: 'CaseStudiesFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_CreatedAt_Read = {
    __typename?: 'CaseStudiesFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_CreatedAt_Update = {
    __typename?: 'CaseStudiesFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Excerpt = {
    __typename?: 'CaseStudiesFields_excerpt';
    create?: Maybe<CaseStudiesFields_Excerpt_Create>;
    delete?: Maybe<CaseStudiesFields_Excerpt_Delete>;
    read?: Maybe<CaseStudiesFields_Excerpt_Read>;
    update?: Maybe<CaseStudiesFields_Excerpt_Update>;
};

export type CaseStudiesFields_Excerpt_Create = {
    __typename?: 'CaseStudiesFields_excerpt_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Excerpt_Delete = {
    __typename?: 'CaseStudiesFields_excerpt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Excerpt_Read = {
    __typename?: 'CaseStudiesFields_excerpt_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Excerpt_Update = {
    __typename?: 'CaseStudiesFields_excerpt_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_FeaturedImage = {
    __typename?: 'CaseStudiesFields_featuredImage';
    create?: Maybe<CaseStudiesFields_FeaturedImage_Create>;
    delete?: Maybe<CaseStudiesFields_FeaturedImage_Delete>;
    read?: Maybe<CaseStudiesFields_FeaturedImage_Read>;
    update?: Maybe<CaseStudiesFields_FeaturedImage_Update>;
};

export type CaseStudiesFields_FeaturedImage_Create = {
    __typename?: 'CaseStudiesFields_featuredImage_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_FeaturedImage_Delete = {
    __typename?: 'CaseStudiesFields_featuredImage_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_FeaturedImage_Read = {
    __typename?: 'CaseStudiesFields_featuredImage_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_FeaturedImage_Update = {
    __typename?: 'CaseStudiesFields_featuredImage_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_InternalTitle = {
    __typename?: 'CaseStudiesFields_internalTitle';
    create?: Maybe<CaseStudiesFields_InternalTitle_Create>;
    delete?: Maybe<CaseStudiesFields_InternalTitle_Delete>;
    read?: Maybe<CaseStudiesFields_InternalTitle_Read>;
    update?: Maybe<CaseStudiesFields_InternalTitle_Update>;
};

export type CaseStudiesFields_InternalTitle_Create = {
    __typename?: 'CaseStudiesFields_internalTitle_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_InternalTitle_Delete = {
    __typename?: 'CaseStudiesFields_internalTitle_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_InternalTitle_Read = {
    __typename?: 'CaseStudiesFields_internalTitle_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_InternalTitle_Update = {
    __typename?: 'CaseStudiesFields_internalTitle_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Intro = {
    __typename?: 'CaseStudiesFields_intro';
    create?: Maybe<CaseStudiesFields_Intro_Create>;
    delete?: Maybe<CaseStudiesFields_Intro_Delete>;
    fields?: Maybe<CaseStudiesFields_Intro_Fields>;
    read?: Maybe<CaseStudiesFields_Intro_Read>;
    update?: Maybe<CaseStudiesFields_Intro_Update>;
};

export type CaseStudiesFields_Intro_Create = {
    __typename?: 'CaseStudiesFields_intro_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Intro_Delete = {
    __typename?: 'CaseStudiesFields_intro_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Intro_Fields = {
    __typename?: 'CaseStudiesFields_intro_Fields';
    cta?: Maybe<CaseStudiesFields_Intro_Cta>;
    heading?: Maybe<CaseStudiesFields_Intro_Heading>;
    image?: Maybe<CaseStudiesFields_Intro_Image>;
    text?: Maybe<CaseStudiesFields_Intro_Text>;
};

export type CaseStudiesFields_Intro_Read = {
    __typename?: 'CaseStudiesFields_intro_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Intro_Update = {
    __typename?: 'CaseStudiesFields_intro_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Intro_Cta = {
    __typename?: 'CaseStudiesFields_intro_cta';
    create?: Maybe<CaseStudiesFields_Intro_Cta_Create>;
    delete?: Maybe<CaseStudiesFields_Intro_Cta_Delete>;
    read?: Maybe<CaseStudiesFields_Intro_Cta_Read>;
    update?: Maybe<CaseStudiesFields_Intro_Cta_Update>;
};

export type CaseStudiesFields_Intro_Cta_Create = {
    __typename?: 'CaseStudiesFields_intro_cta_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Intro_Cta_Delete = {
    __typename?: 'CaseStudiesFields_intro_cta_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Intro_Cta_Read = {
    __typename?: 'CaseStudiesFields_intro_cta_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Intro_Cta_Update = {
    __typename?: 'CaseStudiesFields_intro_cta_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Intro_Heading = {
    __typename?: 'CaseStudiesFields_intro_heading';
    create?: Maybe<CaseStudiesFields_Intro_Heading_Create>;
    delete?: Maybe<CaseStudiesFields_Intro_Heading_Delete>;
    read?: Maybe<CaseStudiesFields_Intro_Heading_Read>;
    update?: Maybe<CaseStudiesFields_Intro_Heading_Update>;
};

export type CaseStudiesFields_Intro_Heading_Create = {
    __typename?: 'CaseStudiesFields_intro_heading_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Intro_Heading_Delete = {
    __typename?: 'CaseStudiesFields_intro_heading_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Intro_Heading_Read = {
    __typename?: 'CaseStudiesFields_intro_heading_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Intro_Heading_Update = {
    __typename?: 'CaseStudiesFields_intro_heading_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Intro_Image = {
    __typename?: 'CaseStudiesFields_intro_image';
    create?: Maybe<CaseStudiesFields_Intro_Image_Create>;
    delete?: Maybe<CaseStudiesFields_Intro_Image_Delete>;
    read?: Maybe<CaseStudiesFields_Intro_Image_Read>;
    update?: Maybe<CaseStudiesFields_Intro_Image_Update>;
};

export type CaseStudiesFields_Intro_Image_Create = {
    __typename?: 'CaseStudiesFields_intro_image_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Intro_Image_Delete = {
    __typename?: 'CaseStudiesFields_intro_image_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Intro_Image_Read = {
    __typename?: 'CaseStudiesFields_intro_image_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Intro_Image_Update = {
    __typename?: 'CaseStudiesFields_intro_image_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Intro_Text = {
    __typename?: 'CaseStudiesFields_intro_text';
    create?: Maybe<CaseStudiesFields_Intro_Text_Create>;
    delete?: Maybe<CaseStudiesFields_Intro_Text_Delete>;
    read?: Maybe<CaseStudiesFields_Intro_Text_Read>;
    update?: Maybe<CaseStudiesFields_Intro_Text_Update>;
};

export type CaseStudiesFields_Intro_Text_Create = {
    __typename?: 'CaseStudiesFields_intro_text_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Intro_Text_Delete = {
    __typename?: 'CaseStudiesFields_intro_text_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Intro_Text_Read = {
    __typename?: 'CaseStudiesFields_intro_text_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Intro_Text_Update = {
    __typename?: 'CaseStudiesFields_intro_text_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta = {
    __typename?: 'CaseStudiesFields_meta';
    create?: Maybe<CaseStudiesFields_Meta_Create>;
    delete?: Maybe<CaseStudiesFields_Meta_Delete>;
    fields?: Maybe<CaseStudiesFields_Meta_Fields>;
    read?: Maybe<CaseStudiesFields_Meta_Read>;
    update?: Maybe<CaseStudiesFields_Meta_Update>;
};

export type CaseStudiesFields_Meta_Create = {
    __typename?: 'CaseStudiesFields_meta_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Delete = {
    __typename?: 'CaseStudiesFields_meta_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Fields = {
    __typename?: 'CaseStudiesFields_meta_Fields';
    description?: Maybe<CaseStudiesFields_Meta_Description>;
    image?: Maybe<CaseStudiesFields_Meta_Image>;
    noIndex?: Maybe<CaseStudiesFields_Meta_NoIndex>;
    overview?: Maybe<CaseStudiesFields_Meta_Overview>;
    preview?: Maybe<CaseStudiesFields_Meta_Preview>;
    title?: Maybe<CaseStudiesFields_Meta_Title>;
};

export type CaseStudiesFields_Meta_Read = {
    __typename?: 'CaseStudiesFields_meta_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Update = {
    __typename?: 'CaseStudiesFields_meta_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Description = {
    __typename?: 'CaseStudiesFields_meta_description';
    create?: Maybe<CaseStudiesFields_Meta_Description_Create>;
    delete?: Maybe<CaseStudiesFields_Meta_Description_Delete>;
    read?: Maybe<CaseStudiesFields_Meta_Description_Read>;
    update?: Maybe<CaseStudiesFields_Meta_Description_Update>;
};

export type CaseStudiesFields_Meta_Description_Create = {
    __typename?: 'CaseStudiesFields_meta_description_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Description_Delete = {
    __typename?: 'CaseStudiesFields_meta_description_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Description_Read = {
    __typename?: 'CaseStudiesFields_meta_description_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Description_Update = {
    __typename?: 'CaseStudiesFields_meta_description_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Image = {
    __typename?: 'CaseStudiesFields_meta_image';
    create?: Maybe<CaseStudiesFields_Meta_Image_Create>;
    delete?: Maybe<CaseStudiesFields_Meta_Image_Delete>;
    read?: Maybe<CaseStudiesFields_Meta_Image_Read>;
    update?: Maybe<CaseStudiesFields_Meta_Image_Update>;
};

export type CaseStudiesFields_Meta_Image_Create = {
    __typename?: 'CaseStudiesFields_meta_image_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Image_Delete = {
    __typename?: 'CaseStudiesFields_meta_image_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Image_Read = {
    __typename?: 'CaseStudiesFields_meta_image_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Image_Update = {
    __typename?: 'CaseStudiesFields_meta_image_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_NoIndex = {
    __typename?: 'CaseStudiesFields_meta_noIndex';
    create?: Maybe<CaseStudiesFields_Meta_NoIndex_Create>;
    delete?: Maybe<CaseStudiesFields_Meta_NoIndex_Delete>;
    read?: Maybe<CaseStudiesFields_Meta_NoIndex_Read>;
    update?: Maybe<CaseStudiesFields_Meta_NoIndex_Update>;
};

export type CaseStudiesFields_Meta_NoIndex_Create = {
    __typename?: 'CaseStudiesFields_meta_noIndex_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_NoIndex_Delete = {
    __typename?: 'CaseStudiesFields_meta_noIndex_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_NoIndex_Read = {
    __typename?: 'CaseStudiesFields_meta_noIndex_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_NoIndex_Update = {
    __typename?: 'CaseStudiesFields_meta_noIndex_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Overview = {
    __typename?: 'CaseStudiesFields_meta_overview';
    create?: Maybe<CaseStudiesFields_Meta_Overview_Create>;
    delete?: Maybe<CaseStudiesFields_Meta_Overview_Delete>;
    read?: Maybe<CaseStudiesFields_Meta_Overview_Read>;
    update?: Maybe<CaseStudiesFields_Meta_Overview_Update>;
};

export type CaseStudiesFields_Meta_Overview_Create = {
    __typename?: 'CaseStudiesFields_meta_overview_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Overview_Delete = {
    __typename?: 'CaseStudiesFields_meta_overview_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Overview_Read = {
    __typename?: 'CaseStudiesFields_meta_overview_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Overview_Update = {
    __typename?: 'CaseStudiesFields_meta_overview_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Preview = {
    __typename?: 'CaseStudiesFields_meta_preview';
    create?: Maybe<CaseStudiesFields_Meta_Preview_Create>;
    delete?: Maybe<CaseStudiesFields_Meta_Preview_Delete>;
    read?: Maybe<CaseStudiesFields_Meta_Preview_Read>;
    update?: Maybe<CaseStudiesFields_Meta_Preview_Update>;
};

export type CaseStudiesFields_Meta_Preview_Create = {
    __typename?: 'CaseStudiesFields_meta_preview_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Preview_Delete = {
    __typename?: 'CaseStudiesFields_meta_preview_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Preview_Read = {
    __typename?: 'CaseStudiesFields_meta_preview_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Preview_Update = {
    __typename?: 'CaseStudiesFields_meta_preview_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Title = {
    __typename?: 'CaseStudiesFields_meta_title';
    create?: Maybe<CaseStudiesFields_Meta_Title_Create>;
    delete?: Maybe<CaseStudiesFields_Meta_Title_Delete>;
    read?: Maybe<CaseStudiesFields_Meta_Title_Read>;
    update?: Maybe<CaseStudiesFields_Meta_Title_Update>;
};

export type CaseStudiesFields_Meta_Title_Create = {
    __typename?: 'CaseStudiesFields_meta_title_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Title_Delete = {
    __typename?: 'CaseStudiesFields_meta_title_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Title_Read = {
    __typename?: 'CaseStudiesFields_meta_title_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Meta_Title_Update = {
    __typename?: 'CaseStudiesFields_meta_title_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Slug = {
    __typename?: 'CaseStudiesFields_slug';
    create?: Maybe<CaseStudiesFields_Slug_Create>;
    delete?: Maybe<CaseStudiesFields_Slug_Delete>;
    read?: Maybe<CaseStudiesFields_Slug_Read>;
    update?: Maybe<CaseStudiesFields_Slug_Update>;
};

export type CaseStudiesFields_Slug_Create = {
    __typename?: 'CaseStudiesFields_slug_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Slug_Delete = {
    __typename?: 'CaseStudiesFields_slug_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Slug_Read = {
    __typename?: 'CaseStudiesFields_slug_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Slug_Update = {
    __typename?: 'CaseStudiesFields_slug_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Title = {
    __typename?: 'CaseStudiesFields_title';
    create?: Maybe<CaseStudiesFields_Title_Create>;
    delete?: Maybe<CaseStudiesFields_Title_Delete>;
    read?: Maybe<CaseStudiesFields_Title_Read>;
    update?: Maybe<CaseStudiesFields_Title_Update>;
};

export type CaseStudiesFields_Title_Create = {
    __typename?: 'CaseStudiesFields_title_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Title_Delete = {
    __typename?: 'CaseStudiesFields_title_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Title_Read = {
    __typename?: 'CaseStudiesFields_title_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_Title_Update = {
    __typename?: 'CaseStudiesFields_title_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_UpdatedAt = {
    __typename?: 'CaseStudiesFields_updatedAt';
    create?: Maybe<CaseStudiesFields_UpdatedAt_Create>;
    delete?: Maybe<CaseStudiesFields_UpdatedAt_Delete>;
    read?: Maybe<CaseStudiesFields_UpdatedAt_Read>;
    update?: Maybe<CaseStudiesFields_UpdatedAt_Update>;
};

export type CaseStudiesFields_UpdatedAt_Create = {
    __typename?: 'CaseStudiesFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_UpdatedAt_Delete = {
    __typename?: 'CaseStudiesFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_UpdatedAt_Read = {
    __typename?: 'CaseStudiesFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesFields_UpdatedAt_Update = {
    __typename?: 'CaseStudiesFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudiesReadAccess = {
    __typename?: 'CaseStudiesReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CaseStudiesReadDocAccess = {
    __typename?: 'CaseStudiesReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CaseStudiesUpdateAccess = {
    __typename?: 'CaseStudiesUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CaseStudiesUpdateDocAccess = {
    __typename?: 'CaseStudiesUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CaseStudy = {
    __typename?: 'CaseStudy';
    caseStudySections?: Maybe<Array<CaseStudy_CaseStudySections>>;
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    excerpt?: Maybe<Scalars['String']['output']>;
    featuredImage?: Maybe<Image>;
    id?: Maybe<Scalars['String']['output']>;
    internalTitle?: Maybe<Scalars['String']['output']>;
    intro?: Maybe<CaseStudy_Intro>;
    meta?: Maybe<CaseStudy_Meta>;
    slug?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CaseStudyFeaturedImageArgs = {
    where?: InputMaybe<CaseStudy_FeaturedImage_Where>;
};

export type CaseStudyListing = {
    __typename?: 'CaseStudyListing';
    caseStudies?: Maybe<Array<Project>>;
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
    caseStudies?: Maybe<CaseStudyListingDocAccessFields_CaseStudies>;
    createdAt?: Maybe<CaseStudyListingDocAccessFields_CreatedAt>;
    icon?: Maybe<CaseStudyListingDocAccessFields_Icon>;
    title?: Maybe<CaseStudyListingDocAccessFields_Title>;
    updatedAt?: Maybe<CaseStudyListingDocAccessFields_UpdatedAt>;
};

export type CaseStudyListingDocAccessFields_CaseStudies = {
    __typename?: 'CaseStudyListingDocAccessFields_caseStudies';
    create?: Maybe<CaseStudyListingDocAccessFields_CaseStudies_Create>;
    delete?: Maybe<CaseStudyListingDocAccessFields_CaseStudies_Delete>;
    read?: Maybe<CaseStudyListingDocAccessFields_CaseStudies_Read>;
    update?: Maybe<CaseStudyListingDocAccessFields_CaseStudies_Update>;
};

export type CaseStudyListingDocAccessFields_CaseStudies_Create = {
    __typename?: 'CaseStudyListingDocAccessFields_caseStudies_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingDocAccessFields_CaseStudies_Delete = {
    __typename?: 'CaseStudyListingDocAccessFields_caseStudies_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingDocAccessFields_CaseStudies_Read = {
    __typename?: 'CaseStudyListingDocAccessFields_caseStudies_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingDocAccessFields_CaseStudies_Update = {
    __typename?: 'CaseStudyListingDocAccessFields_caseStudies_Update';
    permission: Scalars['Boolean']['output'];
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
    caseStudies?: Maybe<CaseStudyListingFields_CaseStudies>;
    createdAt?: Maybe<CaseStudyListingFields_CreatedAt>;
    icon?: Maybe<CaseStudyListingFields_Icon>;
    title?: Maybe<CaseStudyListingFields_Title>;
    updatedAt?: Maybe<CaseStudyListingFields_UpdatedAt>;
};

export type CaseStudyListingFields_CaseStudies = {
    __typename?: 'CaseStudyListingFields_caseStudies';
    create?: Maybe<CaseStudyListingFields_CaseStudies_Create>;
    delete?: Maybe<CaseStudyListingFields_CaseStudies_Delete>;
    read?: Maybe<CaseStudyListingFields_CaseStudies_Read>;
    update?: Maybe<CaseStudyListingFields_CaseStudies_Update>;
};

export type CaseStudyListingFields_CaseStudies_Create = {
    __typename?: 'CaseStudyListingFields_caseStudies_Create';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingFields_CaseStudies_Delete = {
    __typename?: 'CaseStudyListingFields_caseStudies_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingFields_CaseStudies_Read = {
    __typename?: 'CaseStudyListingFields_caseStudies_Read';
    permission: Scalars['Boolean']['output'];
};

export type CaseStudyListingFields_CaseStudies_Update = {
    __typename?: 'CaseStudyListingFields_caseStudies_Update';
    permission: Scalars['Boolean']['output'];
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

export type CaseStudyListing_Icon_Base64_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
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
    base64?: InputMaybe<CaseStudyListing_Icon_Base64_Operator>;
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
    base64?: InputMaybe<CaseStudyListing_Icon_Base64_Operator>;
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
    base64?: InputMaybe<CaseStudyListing_Icon_Base64_Operator>;
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

export type CaseStudy_CaseStudySections = ImageBlock | TextBlock;

export type CaseStudy_FeaturedImage_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_FeaturedImage_Base64_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_FeaturedImage_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CaseStudy_FeaturedImage_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_FeaturedImage_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type CaseStudy_FeaturedImage_Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type CaseStudy_FeaturedImage_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_FeaturedImage_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_FeaturedImage_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_FeaturedImage_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type CaseStudy_FeaturedImage_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type CaseStudy_FeaturedImage_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_FeaturedImage_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_FeaturedImage_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type CaseStudy_FeaturedImage_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CaseStudy_FeaturedImage_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_FeaturedImage_Where = {
    AND?: InputMaybe<Array<InputMaybe<CaseStudy_FeaturedImage_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<CaseStudy_FeaturedImage_Where_Or>>>;
    alt?: InputMaybe<CaseStudy_FeaturedImage_Alt_Operator>;
    base64?: InputMaybe<CaseStudy_FeaturedImage_Base64_Operator>;
    createdAt?: InputMaybe<CaseStudy_FeaturedImage_CreatedAt_Operator>;
    filename?: InputMaybe<CaseStudy_FeaturedImage_Filename_Operator>;
    filesize?: InputMaybe<CaseStudy_FeaturedImage_Filesize_Operator>;
    height?: InputMaybe<CaseStudy_FeaturedImage_Height_Operator>;
    id?: InputMaybe<CaseStudy_FeaturedImage_Id_Operator>;
    mimeType?: InputMaybe<CaseStudy_FeaturedImage_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<CaseStudy_FeaturedImage_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<CaseStudy_FeaturedImage_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<CaseStudy_FeaturedImage_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<CaseStudy_FeaturedImage_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<CaseStudy_FeaturedImage_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<CaseStudy_FeaturedImage_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<CaseStudy_FeaturedImage_UpdatedAt_Operator>;
    url?: InputMaybe<CaseStudy_FeaturedImage_Url_Operator>;
    width?: InputMaybe<CaseStudy_FeaturedImage_Width_Operator>;
};

export type CaseStudy_FeaturedImage_Where_And = {
    alt?: InputMaybe<CaseStudy_FeaturedImage_Alt_Operator>;
    base64?: InputMaybe<CaseStudy_FeaturedImage_Base64_Operator>;
    createdAt?: InputMaybe<CaseStudy_FeaturedImage_CreatedAt_Operator>;
    filename?: InputMaybe<CaseStudy_FeaturedImage_Filename_Operator>;
    filesize?: InputMaybe<CaseStudy_FeaturedImage_Filesize_Operator>;
    height?: InputMaybe<CaseStudy_FeaturedImage_Height_Operator>;
    id?: InputMaybe<CaseStudy_FeaturedImage_Id_Operator>;
    mimeType?: InputMaybe<CaseStudy_FeaturedImage_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<CaseStudy_FeaturedImage_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<CaseStudy_FeaturedImage_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<CaseStudy_FeaturedImage_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<CaseStudy_FeaturedImage_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<CaseStudy_FeaturedImage_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<CaseStudy_FeaturedImage_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<CaseStudy_FeaturedImage_UpdatedAt_Operator>;
    url?: InputMaybe<CaseStudy_FeaturedImage_Url_Operator>;
    width?: InputMaybe<CaseStudy_FeaturedImage_Width_Operator>;
};

export type CaseStudy_FeaturedImage_Where_Or = {
    alt?: InputMaybe<CaseStudy_FeaturedImage_Alt_Operator>;
    base64?: InputMaybe<CaseStudy_FeaturedImage_Base64_Operator>;
    createdAt?: InputMaybe<CaseStudy_FeaturedImage_CreatedAt_Operator>;
    filename?: InputMaybe<CaseStudy_FeaturedImage_Filename_Operator>;
    filesize?: InputMaybe<CaseStudy_FeaturedImage_Filesize_Operator>;
    height?: InputMaybe<CaseStudy_FeaturedImage_Height_Operator>;
    id?: InputMaybe<CaseStudy_FeaturedImage_Id_Operator>;
    mimeType?: InputMaybe<CaseStudy_FeaturedImage_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<CaseStudy_FeaturedImage_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<CaseStudy_FeaturedImage_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<CaseStudy_FeaturedImage_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<CaseStudy_FeaturedImage_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<CaseStudy_FeaturedImage_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<CaseStudy_FeaturedImage_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<CaseStudy_FeaturedImage_UpdatedAt_Operator>;
    url?: InputMaybe<CaseStudy_FeaturedImage_Url_Operator>;
    width?: InputMaybe<CaseStudy_FeaturedImage_Width_Operator>;
};

export type CaseStudy_FeaturedImage_Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type CaseStudy_Intro = {
    __typename?: 'CaseStudy_Intro';
    cta?: Maybe<Array<Cta>>;
    heading?: Maybe<Scalars['String']['output']>;
    image?: Maybe<Image>;
    text?: Maybe<Scalars['JSON']['output']>;
};

export type CaseStudy_IntroImageArgs = {
    where?: InputMaybe<CaseStudy_Intro_Image_Where>;
};

export type CaseStudy_IntroTextArgs = {
    depth?: InputMaybe<Scalars['Int']['input']>;
};

export type CaseStudy_Intro_Image_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_Intro_Image_Base64_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_Intro_Image_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CaseStudy_Intro_Image_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_Intro_Image_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type CaseStudy_Intro_Image_Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type CaseStudy_Intro_Image_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_Intro_Image_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_Intro_Image_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_Intro_Image_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type CaseStudy_Intro_Image_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type CaseStudy_Intro_Image_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_Intro_Image_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_Intro_Image_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type CaseStudy_Intro_Image_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CaseStudy_Intro_Image_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_Intro_Image_Where = {
    AND?: InputMaybe<Array<InputMaybe<CaseStudy_Intro_Image_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<CaseStudy_Intro_Image_Where_Or>>>;
    alt?: InputMaybe<CaseStudy_Intro_Image_Alt_Operator>;
    base64?: InputMaybe<CaseStudy_Intro_Image_Base64_Operator>;
    createdAt?: InputMaybe<CaseStudy_Intro_Image_CreatedAt_Operator>;
    filename?: InputMaybe<CaseStudy_Intro_Image_Filename_Operator>;
    filesize?: InputMaybe<CaseStudy_Intro_Image_Filesize_Operator>;
    height?: InputMaybe<CaseStudy_Intro_Image_Height_Operator>;
    id?: InputMaybe<CaseStudy_Intro_Image_Id_Operator>;
    mimeType?: InputMaybe<CaseStudy_Intro_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<CaseStudy_Intro_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<CaseStudy_Intro_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<CaseStudy_Intro_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<CaseStudy_Intro_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<CaseStudy_Intro_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<CaseStudy_Intro_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<CaseStudy_Intro_Image_UpdatedAt_Operator>;
    url?: InputMaybe<CaseStudy_Intro_Image_Url_Operator>;
    width?: InputMaybe<CaseStudy_Intro_Image_Width_Operator>;
};

export type CaseStudy_Intro_Image_Where_And = {
    alt?: InputMaybe<CaseStudy_Intro_Image_Alt_Operator>;
    base64?: InputMaybe<CaseStudy_Intro_Image_Base64_Operator>;
    createdAt?: InputMaybe<CaseStudy_Intro_Image_CreatedAt_Operator>;
    filename?: InputMaybe<CaseStudy_Intro_Image_Filename_Operator>;
    filesize?: InputMaybe<CaseStudy_Intro_Image_Filesize_Operator>;
    height?: InputMaybe<CaseStudy_Intro_Image_Height_Operator>;
    id?: InputMaybe<CaseStudy_Intro_Image_Id_Operator>;
    mimeType?: InputMaybe<CaseStudy_Intro_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<CaseStudy_Intro_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<CaseStudy_Intro_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<CaseStudy_Intro_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<CaseStudy_Intro_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<CaseStudy_Intro_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<CaseStudy_Intro_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<CaseStudy_Intro_Image_UpdatedAt_Operator>;
    url?: InputMaybe<CaseStudy_Intro_Image_Url_Operator>;
    width?: InputMaybe<CaseStudy_Intro_Image_Width_Operator>;
};

export type CaseStudy_Intro_Image_Where_Or = {
    alt?: InputMaybe<CaseStudy_Intro_Image_Alt_Operator>;
    base64?: InputMaybe<CaseStudy_Intro_Image_Base64_Operator>;
    createdAt?: InputMaybe<CaseStudy_Intro_Image_CreatedAt_Operator>;
    filename?: InputMaybe<CaseStudy_Intro_Image_Filename_Operator>;
    filesize?: InputMaybe<CaseStudy_Intro_Image_Filesize_Operator>;
    height?: InputMaybe<CaseStudy_Intro_Image_Height_Operator>;
    id?: InputMaybe<CaseStudy_Intro_Image_Id_Operator>;
    mimeType?: InputMaybe<CaseStudy_Intro_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<CaseStudy_Intro_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<CaseStudy_Intro_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<CaseStudy_Intro_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<CaseStudy_Intro_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<CaseStudy_Intro_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<CaseStudy_Intro_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<CaseStudy_Intro_Image_UpdatedAt_Operator>;
    url?: InputMaybe<CaseStudy_Intro_Image_Url_Operator>;
    width?: InputMaybe<CaseStudy_Intro_Image_Width_Operator>;
};

export type CaseStudy_Intro_Image_Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type CaseStudy_Meta = {
    __typename?: 'CaseStudy_Meta';
    description?: Maybe<Scalars['String']['output']>;
    image?: Maybe<Image>;
    noIndex?: Maybe<Scalars['Boolean']['output']>;
    title?: Maybe<Scalars['String']['output']>;
};

export type CaseStudy_MetaImageArgs = {
    where?: InputMaybe<CaseStudy_Meta_Image_Where>;
};

export type CaseStudy_Meta_Image_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_Meta_Image_Base64_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_Meta_Image_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CaseStudy_Meta_Image_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_Meta_Image_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type CaseStudy_Meta_Image_Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type CaseStudy_Meta_Image_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_Meta_Image_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_Meta_Image_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_Meta_Image_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type CaseStudy_Meta_Image_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type CaseStudy_Meta_Image_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_Meta_Image_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_Meta_Image_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type CaseStudy_Meta_Image_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CaseStudy_Meta_Image_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_Meta_Image_Where = {
    AND?: InputMaybe<Array<InputMaybe<CaseStudy_Meta_Image_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<CaseStudy_Meta_Image_Where_Or>>>;
    alt?: InputMaybe<CaseStudy_Meta_Image_Alt_Operator>;
    base64?: InputMaybe<CaseStudy_Meta_Image_Base64_Operator>;
    createdAt?: InputMaybe<CaseStudy_Meta_Image_CreatedAt_Operator>;
    filename?: InputMaybe<CaseStudy_Meta_Image_Filename_Operator>;
    filesize?: InputMaybe<CaseStudy_Meta_Image_Filesize_Operator>;
    height?: InputMaybe<CaseStudy_Meta_Image_Height_Operator>;
    id?: InputMaybe<CaseStudy_Meta_Image_Id_Operator>;
    mimeType?: InputMaybe<CaseStudy_Meta_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<CaseStudy_Meta_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<CaseStudy_Meta_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<CaseStudy_Meta_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<CaseStudy_Meta_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<CaseStudy_Meta_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<CaseStudy_Meta_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<CaseStudy_Meta_Image_UpdatedAt_Operator>;
    url?: InputMaybe<CaseStudy_Meta_Image_Url_Operator>;
    width?: InputMaybe<CaseStudy_Meta_Image_Width_Operator>;
};

export type CaseStudy_Meta_Image_Where_And = {
    alt?: InputMaybe<CaseStudy_Meta_Image_Alt_Operator>;
    base64?: InputMaybe<CaseStudy_Meta_Image_Base64_Operator>;
    createdAt?: InputMaybe<CaseStudy_Meta_Image_CreatedAt_Operator>;
    filename?: InputMaybe<CaseStudy_Meta_Image_Filename_Operator>;
    filesize?: InputMaybe<CaseStudy_Meta_Image_Filesize_Operator>;
    height?: InputMaybe<CaseStudy_Meta_Image_Height_Operator>;
    id?: InputMaybe<CaseStudy_Meta_Image_Id_Operator>;
    mimeType?: InputMaybe<CaseStudy_Meta_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<CaseStudy_Meta_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<CaseStudy_Meta_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<CaseStudy_Meta_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<CaseStudy_Meta_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<CaseStudy_Meta_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<CaseStudy_Meta_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<CaseStudy_Meta_Image_UpdatedAt_Operator>;
    url?: InputMaybe<CaseStudy_Meta_Image_Url_Operator>;
    width?: InputMaybe<CaseStudy_Meta_Image_Width_Operator>;
};

export type CaseStudy_Meta_Image_Where_Or = {
    alt?: InputMaybe<CaseStudy_Meta_Image_Alt_Operator>;
    base64?: InputMaybe<CaseStudy_Meta_Image_Base64_Operator>;
    createdAt?: InputMaybe<CaseStudy_Meta_Image_CreatedAt_Operator>;
    filename?: InputMaybe<CaseStudy_Meta_Image_Filename_Operator>;
    filesize?: InputMaybe<CaseStudy_Meta_Image_Filesize_Operator>;
    height?: InputMaybe<CaseStudy_Meta_Image_Height_Operator>;
    id?: InputMaybe<CaseStudy_Meta_Image_Id_Operator>;
    mimeType?: InputMaybe<CaseStudy_Meta_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<CaseStudy_Meta_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<CaseStudy_Meta_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<CaseStudy_Meta_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<CaseStudy_Meta_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<CaseStudy_Meta_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<CaseStudy_Meta_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<CaseStudy_Meta_Image_UpdatedAt_Operator>;
    url?: InputMaybe<CaseStudy_Meta_Image_Url_Operator>;
    width?: InputMaybe<CaseStudy_Meta_Image_Width_Operator>;
};

export type CaseStudy_Meta_Image_Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type CaseStudy_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CaseStudy_Excerpt_Operator = {
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type CaseStudy_FeaturedImage_Operator = {
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type CaseStudy_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_InternalTitle_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_Intro__Cta_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_Intro__Heading_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_Intro__Image_Operator = {
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type CaseStudy_Intro__Text_Operator = {
    contains?: InputMaybe<Scalars['JSON']['input']>;
    equals?: InputMaybe<Scalars['JSON']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    like?: InputMaybe<Scalars['JSON']['input']>;
    not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type CaseStudy_Meta__Description_Operator = {
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type CaseStudy_Meta__Image_Operator = {
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type CaseStudy_Meta__NoIndex_Operator = {
    equals?: InputMaybe<Scalars['Boolean']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CaseStudy_Meta__Title_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_Slug_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_Title_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CaseStudy_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CaseStudy_Where = {
    AND?: InputMaybe<Array<InputMaybe<CaseStudy_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<CaseStudy_Where_Or>>>;
    createdAt?: InputMaybe<CaseStudy_CreatedAt_Operator>;
    excerpt?: InputMaybe<CaseStudy_Excerpt_Operator>;
    featuredImage?: InputMaybe<CaseStudy_FeaturedImage_Operator>;
    id?: InputMaybe<CaseStudy_Id_Operator>;
    internalTitle?: InputMaybe<CaseStudy_InternalTitle_Operator>;
    intro__cta?: InputMaybe<CaseStudy_Intro__Cta_Operator>;
    intro__heading?: InputMaybe<CaseStudy_Intro__Heading_Operator>;
    intro__image?: InputMaybe<CaseStudy_Intro__Image_Operator>;
    intro__text?: InputMaybe<CaseStudy_Intro__Text_Operator>;
    meta__description?: InputMaybe<CaseStudy_Meta__Description_Operator>;
    meta__image?: InputMaybe<CaseStudy_Meta__Image_Operator>;
    meta__noIndex?: InputMaybe<CaseStudy_Meta__NoIndex_Operator>;
    meta__title?: InputMaybe<CaseStudy_Meta__Title_Operator>;
    slug?: InputMaybe<CaseStudy_Slug_Operator>;
    title?: InputMaybe<CaseStudy_Title_Operator>;
    updatedAt?: InputMaybe<CaseStudy_UpdatedAt_Operator>;
};

export type CaseStudy_Where_And = {
    createdAt?: InputMaybe<CaseStudy_CreatedAt_Operator>;
    excerpt?: InputMaybe<CaseStudy_Excerpt_Operator>;
    featuredImage?: InputMaybe<CaseStudy_FeaturedImage_Operator>;
    id?: InputMaybe<CaseStudy_Id_Operator>;
    internalTitle?: InputMaybe<CaseStudy_InternalTitle_Operator>;
    intro__cta?: InputMaybe<CaseStudy_Intro__Cta_Operator>;
    intro__heading?: InputMaybe<CaseStudy_Intro__Heading_Operator>;
    intro__image?: InputMaybe<CaseStudy_Intro__Image_Operator>;
    intro__text?: InputMaybe<CaseStudy_Intro__Text_Operator>;
    meta__description?: InputMaybe<CaseStudy_Meta__Description_Operator>;
    meta__image?: InputMaybe<CaseStudy_Meta__Image_Operator>;
    meta__noIndex?: InputMaybe<CaseStudy_Meta__NoIndex_Operator>;
    meta__title?: InputMaybe<CaseStudy_Meta__Title_Operator>;
    slug?: InputMaybe<CaseStudy_Slug_Operator>;
    title?: InputMaybe<CaseStudy_Title_Operator>;
    updatedAt?: InputMaybe<CaseStudy_UpdatedAt_Operator>;
};

export type CaseStudy_Where_Or = {
    createdAt?: InputMaybe<CaseStudy_CreatedAt_Operator>;
    excerpt?: InputMaybe<CaseStudy_Excerpt_Operator>;
    featuredImage?: InputMaybe<CaseStudy_FeaturedImage_Operator>;
    id?: InputMaybe<CaseStudy_Id_Operator>;
    internalTitle?: InputMaybe<CaseStudy_InternalTitle_Operator>;
    intro__cta?: InputMaybe<CaseStudy_Intro__Cta_Operator>;
    intro__heading?: InputMaybe<CaseStudy_Intro__Heading_Operator>;
    intro__image?: InputMaybe<CaseStudy_Intro__Image_Operator>;
    intro__text?: InputMaybe<CaseStudy_Intro__Text_Operator>;
    meta__description?: InputMaybe<CaseStudy_Meta__Description_Operator>;
    meta__image?: InputMaybe<CaseStudy_Meta__Image_Operator>;
    meta__noIndex?: InputMaybe<CaseStudy_Meta__NoIndex_Operator>;
    meta__title?: InputMaybe<CaseStudy_Meta__Title_Operator>;
    slug?: InputMaybe<CaseStudy_Slug_Operator>;
    title?: InputMaybe<CaseStudy_Title_Operator>;
    updatedAt?: InputMaybe<CaseStudy_UpdatedAt_Operator>;
};

export type Cta = {
    __typename?: 'Cta';
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    externalLink?: Maybe<Scalars['String']['output']>;
    fullTitle?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    internalLink?: Maybe<Page>;
    label?: Maybe<Scalars['String']['output']>;
    linkType?: Maybe<Cta_LinkType>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Cta_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Cta_ExternalLink_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Cta_FullTitle_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Cta_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Cta_InternalLink_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Cta_Label_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Cta_LinkType = 'external' | 'internal' | '%future added value';

export type Cta_LinkType_Input =
    | 'external'
    | 'internal'
    | '%future added value';

export type Cta_LinkType_Operator = {
    contains?: InputMaybe<Cta_LinkType_Input>;
    equals?: InputMaybe<Cta_LinkType_Input>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    like?: InputMaybe<Cta_LinkType_Input>;
    not_equals?: InputMaybe<Cta_LinkType_Input>;
};

export type Cta_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Cta_Where = {
    AND?: InputMaybe<Array<InputMaybe<Cta_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<Cta_Where_Or>>>;
    createdAt?: InputMaybe<Cta_CreatedAt_Operator>;
    externalLink?: InputMaybe<Cta_ExternalLink_Operator>;
    fullTitle?: InputMaybe<Cta_FullTitle_Operator>;
    id?: InputMaybe<Cta_Id_Operator>;
    internalLink?: InputMaybe<Cta_InternalLink_Operator>;
    label?: InputMaybe<Cta_Label_Operator>;
    linkType?: InputMaybe<Cta_LinkType_Operator>;
    updatedAt?: InputMaybe<Cta_UpdatedAt_Operator>;
};

export type Cta_Where_And = {
    createdAt?: InputMaybe<Cta_CreatedAt_Operator>;
    externalLink?: InputMaybe<Cta_ExternalLink_Operator>;
    fullTitle?: InputMaybe<Cta_FullTitle_Operator>;
    id?: InputMaybe<Cta_Id_Operator>;
    internalLink?: InputMaybe<Cta_InternalLink_Operator>;
    label?: InputMaybe<Cta_Label_Operator>;
    linkType?: InputMaybe<Cta_LinkType_Operator>;
    updatedAt?: InputMaybe<Cta_UpdatedAt_Operator>;
};

export type Cta_Where_Or = {
    createdAt?: InputMaybe<Cta_CreatedAt_Operator>;
    externalLink?: InputMaybe<Cta_ExternalLink_Operator>;
    fullTitle?: InputMaybe<Cta_FullTitle_Operator>;
    id?: InputMaybe<Cta_Id_Operator>;
    internalLink?: InputMaybe<Cta_InternalLink_Operator>;
    label?: InputMaybe<Cta_Label_Operator>;
    linkType?: InputMaybe<Cta_LinkType_Operator>;
    updatedAt?: InputMaybe<Cta_UpdatedAt_Operator>;
};

export type Ctas = {
    __typename?: 'Ctas';
    docs?: Maybe<Array<Maybe<Cta>>>;
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

export type CtasCreateAccess = {
    __typename?: 'CtasCreateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CtasCreateDocAccess = {
    __typename?: 'CtasCreateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CtasDeleteAccess = {
    __typename?: 'CtasDeleteAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CtasDeleteDocAccess = {
    __typename?: 'CtasDeleteDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CtasDocAccessFields = {
    __typename?: 'CtasDocAccessFields';
    createdAt?: Maybe<CtasDocAccessFields_CreatedAt>;
    externalLink?: Maybe<CtasDocAccessFields_ExternalLink>;
    fullTitle?: Maybe<CtasDocAccessFields_FullTitle>;
    internalLink?: Maybe<CtasDocAccessFields_InternalLink>;
    label?: Maybe<CtasDocAccessFields_Label>;
    linkType?: Maybe<CtasDocAccessFields_LinkType>;
    linksTo?: Maybe<CtasDocAccessFields_LinksTo>;
    updatedAt?: Maybe<CtasDocAccessFields_UpdatedAt>;
};

export type CtasDocAccessFields_CreatedAt = {
    __typename?: 'CtasDocAccessFields_createdAt';
    create?: Maybe<CtasDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<CtasDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<CtasDocAccessFields_CreatedAt_Read>;
    update?: Maybe<CtasDocAccessFields_CreatedAt_Update>;
};

export type CtasDocAccessFields_CreatedAt_Create = {
    __typename?: 'CtasDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtasDocAccessFields_CreatedAt_Delete = {
    __typename?: 'CtasDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtasDocAccessFields_CreatedAt_Read = {
    __typename?: 'CtasDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtasDocAccessFields_CreatedAt_Update = {
    __typename?: 'CtasDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtasDocAccessFields_ExternalLink = {
    __typename?: 'CtasDocAccessFields_externalLink';
    create?: Maybe<CtasDocAccessFields_ExternalLink_Create>;
    delete?: Maybe<CtasDocAccessFields_ExternalLink_Delete>;
    read?: Maybe<CtasDocAccessFields_ExternalLink_Read>;
    update?: Maybe<CtasDocAccessFields_ExternalLink_Update>;
};

export type CtasDocAccessFields_ExternalLink_Create = {
    __typename?: 'CtasDocAccessFields_externalLink_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtasDocAccessFields_ExternalLink_Delete = {
    __typename?: 'CtasDocAccessFields_externalLink_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtasDocAccessFields_ExternalLink_Read = {
    __typename?: 'CtasDocAccessFields_externalLink_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtasDocAccessFields_ExternalLink_Update = {
    __typename?: 'CtasDocAccessFields_externalLink_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtasDocAccessFields_FullTitle = {
    __typename?: 'CtasDocAccessFields_fullTitle';
    create?: Maybe<CtasDocAccessFields_FullTitle_Create>;
    delete?: Maybe<CtasDocAccessFields_FullTitle_Delete>;
    read?: Maybe<CtasDocAccessFields_FullTitle_Read>;
    update?: Maybe<CtasDocAccessFields_FullTitle_Update>;
};

export type CtasDocAccessFields_FullTitle_Create = {
    __typename?: 'CtasDocAccessFields_fullTitle_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtasDocAccessFields_FullTitle_Delete = {
    __typename?: 'CtasDocAccessFields_fullTitle_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtasDocAccessFields_FullTitle_Read = {
    __typename?: 'CtasDocAccessFields_fullTitle_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtasDocAccessFields_FullTitle_Update = {
    __typename?: 'CtasDocAccessFields_fullTitle_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtasDocAccessFields_InternalLink = {
    __typename?: 'CtasDocAccessFields_internalLink';
    create?: Maybe<CtasDocAccessFields_InternalLink_Create>;
    delete?: Maybe<CtasDocAccessFields_InternalLink_Delete>;
    read?: Maybe<CtasDocAccessFields_InternalLink_Read>;
    update?: Maybe<CtasDocAccessFields_InternalLink_Update>;
};

export type CtasDocAccessFields_InternalLink_Create = {
    __typename?: 'CtasDocAccessFields_internalLink_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtasDocAccessFields_InternalLink_Delete = {
    __typename?: 'CtasDocAccessFields_internalLink_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtasDocAccessFields_InternalLink_Read = {
    __typename?: 'CtasDocAccessFields_internalLink_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtasDocAccessFields_InternalLink_Update = {
    __typename?: 'CtasDocAccessFields_internalLink_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtasDocAccessFields_Label = {
    __typename?: 'CtasDocAccessFields_label';
    create?: Maybe<CtasDocAccessFields_Label_Create>;
    delete?: Maybe<CtasDocAccessFields_Label_Delete>;
    read?: Maybe<CtasDocAccessFields_Label_Read>;
    update?: Maybe<CtasDocAccessFields_Label_Update>;
};

export type CtasDocAccessFields_Label_Create = {
    __typename?: 'CtasDocAccessFields_label_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtasDocAccessFields_Label_Delete = {
    __typename?: 'CtasDocAccessFields_label_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtasDocAccessFields_Label_Read = {
    __typename?: 'CtasDocAccessFields_label_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtasDocAccessFields_Label_Update = {
    __typename?: 'CtasDocAccessFields_label_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtasDocAccessFields_LinkType = {
    __typename?: 'CtasDocAccessFields_linkType';
    create?: Maybe<CtasDocAccessFields_LinkType_Create>;
    delete?: Maybe<CtasDocAccessFields_LinkType_Delete>;
    read?: Maybe<CtasDocAccessFields_LinkType_Read>;
    update?: Maybe<CtasDocAccessFields_LinkType_Update>;
};

export type CtasDocAccessFields_LinkType_Create = {
    __typename?: 'CtasDocAccessFields_linkType_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtasDocAccessFields_LinkType_Delete = {
    __typename?: 'CtasDocAccessFields_linkType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtasDocAccessFields_LinkType_Read = {
    __typename?: 'CtasDocAccessFields_linkType_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtasDocAccessFields_LinkType_Update = {
    __typename?: 'CtasDocAccessFields_linkType_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtasDocAccessFields_LinksTo = {
    __typename?: 'CtasDocAccessFields_linksTo';
    create?: Maybe<CtasDocAccessFields_LinksTo_Create>;
    delete?: Maybe<CtasDocAccessFields_LinksTo_Delete>;
    read?: Maybe<CtasDocAccessFields_LinksTo_Read>;
    update?: Maybe<CtasDocAccessFields_LinksTo_Update>;
};

export type CtasDocAccessFields_LinksTo_Create = {
    __typename?: 'CtasDocAccessFields_linksTo_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtasDocAccessFields_LinksTo_Delete = {
    __typename?: 'CtasDocAccessFields_linksTo_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtasDocAccessFields_LinksTo_Read = {
    __typename?: 'CtasDocAccessFields_linksTo_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtasDocAccessFields_LinksTo_Update = {
    __typename?: 'CtasDocAccessFields_linksTo_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtasDocAccessFields_UpdatedAt = {
    __typename?: 'CtasDocAccessFields_updatedAt';
    create?: Maybe<CtasDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<CtasDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<CtasDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<CtasDocAccessFields_UpdatedAt_Update>;
};

export type CtasDocAccessFields_UpdatedAt_Create = {
    __typename?: 'CtasDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtasDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'CtasDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtasDocAccessFields_UpdatedAt_Read = {
    __typename?: 'CtasDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtasDocAccessFields_UpdatedAt_Update = {
    __typename?: 'CtasDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields = {
    __typename?: 'CtasFields';
    createdAt?: Maybe<CtasFields_CreatedAt>;
    externalLink?: Maybe<CtasFields_ExternalLink>;
    fullTitle?: Maybe<CtasFields_FullTitle>;
    internalLink?: Maybe<CtasFields_InternalLink>;
    label?: Maybe<CtasFields_Label>;
    linkType?: Maybe<CtasFields_LinkType>;
    linksTo?: Maybe<CtasFields_LinksTo>;
    updatedAt?: Maybe<CtasFields_UpdatedAt>;
};

export type CtasFields_CreatedAt = {
    __typename?: 'CtasFields_createdAt';
    create?: Maybe<CtasFields_CreatedAt_Create>;
    delete?: Maybe<CtasFields_CreatedAt_Delete>;
    read?: Maybe<CtasFields_CreatedAt_Read>;
    update?: Maybe<CtasFields_CreatedAt_Update>;
};

export type CtasFields_CreatedAt_Create = {
    __typename?: 'CtasFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields_CreatedAt_Delete = {
    __typename?: 'CtasFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields_CreatedAt_Read = {
    __typename?: 'CtasFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields_CreatedAt_Update = {
    __typename?: 'CtasFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields_ExternalLink = {
    __typename?: 'CtasFields_externalLink';
    create?: Maybe<CtasFields_ExternalLink_Create>;
    delete?: Maybe<CtasFields_ExternalLink_Delete>;
    read?: Maybe<CtasFields_ExternalLink_Read>;
    update?: Maybe<CtasFields_ExternalLink_Update>;
};

export type CtasFields_ExternalLink_Create = {
    __typename?: 'CtasFields_externalLink_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields_ExternalLink_Delete = {
    __typename?: 'CtasFields_externalLink_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields_ExternalLink_Read = {
    __typename?: 'CtasFields_externalLink_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields_ExternalLink_Update = {
    __typename?: 'CtasFields_externalLink_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields_FullTitle = {
    __typename?: 'CtasFields_fullTitle';
    create?: Maybe<CtasFields_FullTitle_Create>;
    delete?: Maybe<CtasFields_FullTitle_Delete>;
    read?: Maybe<CtasFields_FullTitle_Read>;
    update?: Maybe<CtasFields_FullTitle_Update>;
};

export type CtasFields_FullTitle_Create = {
    __typename?: 'CtasFields_fullTitle_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields_FullTitle_Delete = {
    __typename?: 'CtasFields_fullTitle_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields_FullTitle_Read = {
    __typename?: 'CtasFields_fullTitle_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields_FullTitle_Update = {
    __typename?: 'CtasFields_fullTitle_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields_InternalLink = {
    __typename?: 'CtasFields_internalLink';
    create?: Maybe<CtasFields_InternalLink_Create>;
    delete?: Maybe<CtasFields_InternalLink_Delete>;
    read?: Maybe<CtasFields_InternalLink_Read>;
    update?: Maybe<CtasFields_InternalLink_Update>;
};

export type CtasFields_InternalLink_Create = {
    __typename?: 'CtasFields_internalLink_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields_InternalLink_Delete = {
    __typename?: 'CtasFields_internalLink_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields_InternalLink_Read = {
    __typename?: 'CtasFields_internalLink_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields_InternalLink_Update = {
    __typename?: 'CtasFields_internalLink_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields_Label = {
    __typename?: 'CtasFields_label';
    create?: Maybe<CtasFields_Label_Create>;
    delete?: Maybe<CtasFields_Label_Delete>;
    read?: Maybe<CtasFields_Label_Read>;
    update?: Maybe<CtasFields_Label_Update>;
};

export type CtasFields_Label_Create = {
    __typename?: 'CtasFields_label_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields_Label_Delete = {
    __typename?: 'CtasFields_label_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields_Label_Read = {
    __typename?: 'CtasFields_label_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields_Label_Update = {
    __typename?: 'CtasFields_label_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields_LinkType = {
    __typename?: 'CtasFields_linkType';
    create?: Maybe<CtasFields_LinkType_Create>;
    delete?: Maybe<CtasFields_LinkType_Delete>;
    read?: Maybe<CtasFields_LinkType_Read>;
    update?: Maybe<CtasFields_LinkType_Update>;
};

export type CtasFields_LinkType_Create = {
    __typename?: 'CtasFields_linkType_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields_LinkType_Delete = {
    __typename?: 'CtasFields_linkType_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields_LinkType_Read = {
    __typename?: 'CtasFields_linkType_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields_LinkType_Update = {
    __typename?: 'CtasFields_linkType_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields_LinksTo = {
    __typename?: 'CtasFields_linksTo';
    create?: Maybe<CtasFields_LinksTo_Create>;
    delete?: Maybe<CtasFields_LinksTo_Delete>;
    read?: Maybe<CtasFields_LinksTo_Read>;
    update?: Maybe<CtasFields_LinksTo_Update>;
};

export type CtasFields_LinksTo_Create = {
    __typename?: 'CtasFields_linksTo_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields_LinksTo_Delete = {
    __typename?: 'CtasFields_linksTo_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields_LinksTo_Read = {
    __typename?: 'CtasFields_linksTo_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields_LinksTo_Update = {
    __typename?: 'CtasFields_linksTo_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields_UpdatedAt = {
    __typename?: 'CtasFields_updatedAt';
    create?: Maybe<CtasFields_UpdatedAt_Create>;
    delete?: Maybe<CtasFields_UpdatedAt_Delete>;
    read?: Maybe<CtasFields_UpdatedAt_Read>;
    update?: Maybe<CtasFields_UpdatedAt_Update>;
};

export type CtasFields_UpdatedAt_Create = {
    __typename?: 'CtasFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields_UpdatedAt_Delete = {
    __typename?: 'CtasFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields_UpdatedAt_Read = {
    __typename?: 'CtasFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type CtasFields_UpdatedAt_Update = {
    __typename?: 'CtasFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type CtasReadAccess = {
    __typename?: 'CtasReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CtasReadDocAccess = {
    __typename?: 'CtasReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CtasUpdateAccess = {
    __typename?: 'CtasUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CtasUpdateDocAccess = {
    __typename?: 'CtasUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Hero = {
    __typename?: 'Hero';
    coloredSubhead?: Maybe<Scalars['JSON']['output']>;
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    cta?: Maybe<Cta>;
    doodles?: Maybe<Scalars['Boolean']['output']>;
    heading: Scalars['String']['output'];
    headingTag: Scalars['String']['output'];
    homepage?: Maybe<Scalars['Boolean']['output']>;
    icon?: Maybe<Icon>;
    id?: Maybe<Scalars['String']['output']>;
    subhead?: Maybe<Scalars['String']['output']>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HeroColoredSubheadArgs = {
    depth?: InputMaybe<Scalars['Int']['input']>;
};

export type HeroIconArgs = {
    where?: InputMaybe<Hero_Icon_Where>;
};

export type HeroBlock = {
    __typename?: 'HeroBlock';
    blockName?: Maybe<Scalars['String']['output']>;
    blockType?: Maybe<Scalars['String']['output']>;
    hero?: Maybe<Hero>;
    id?: Maybe<Scalars['String']['output']>;
    sectionId?: Maybe<Scalars['String']['output']>;
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

export type Hero_Icon_Base64_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
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
    base64?: InputMaybe<Hero_Icon_Base64_Operator>;
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
    base64?: InputMaybe<Hero_Icon_Base64_Operator>;
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
    base64?: InputMaybe<Hero_Icon_Base64_Operator>;
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

export type Hero_Cta_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Hero_Doodles_Operator = {
    equals?: InputMaybe<Scalars['Boolean']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    not_equals?: InputMaybe<Scalars['Boolean']['input']>;
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

export type Hero_Homepage_Operator = {
    equals?: InputMaybe<Scalars['Boolean']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    not_equals?: InputMaybe<Scalars['Boolean']['input']>;
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

export type Hero_Subhead_Operator = {
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
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
    cta?: InputMaybe<Hero_Cta_Operator>;
    doodles?: InputMaybe<Hero_Doodles_Operator>;
    heading?: InputMaybe<Hero_Heading_Operator>;
    headingTag?: InputMaybe<Hero_HeadingTag_Operator>;
    homepage?: InputMaybe<Hero_Homepage_Operator>;
    icon?: InputMaybe<Hero_Icon_Operator>;
    id?: InputMaybe<Hero_Id_Operator>;
    subhead?: InputMaybe<Hero_Subhead_Operator>;
    updatedAt?: InputMaybe<Hero_UpdatedAt_Operator>;
};

export type Hero_Where_And = {
    coloredSubhead?: InputMaybe<Hero_ColoredSubhead_Operator>;
    createdAt?: InputMaybe<Hero_CreatedAt_Operator>;
    cta?: InputMaybe<Hero_Cta_Operator>;
    doodles?: InputMaybe<Hero_Doodles_Operator>;
    heading?: InputMaybe<Hero_Heading_Operator>;
    headingTag?: InputMaybe<Hero_HeadingTag_Operator>;
    homepage?: InputMaybe<Hero_Homepage_Operator>;
    icon?: InputMaybe<Hero_Icon_Operator>;
    id?: InputMaybe<Hero_Id_Operator>;
    subhead?: InputMaybe<Hero_Subhead_Operator>;
    updatedAt?: InputMaybe<Hero_UpdatedAt_Operator>;
};

export type Hero_Where_Or = {
    coloredSubhead?: InputMaybe<Hero_ColoredSubhead_Operator>;
    createdAt?: InputMaybe<Hero_CreatedAt_Operator>;
    cta?: InputMaybe<Hero_Cta_Operator>;
    doodles?: InputMaybe<Hero_Doodles_Operator>;
    heading?: InputMaybe<Hero_Heading_Operator>;
    headingTag?: InputMaybe<Hero_HeadingTag_Operator>;
    homepage?: InputMaybe<Hero_Homepage_Operator>;
    icon?: InputMaybe<Hero_Icon_Operator>;
    id?: InputMaybe<Hero_Id_Operator>;
    subhead?: InputMaybe<Hero_Subhead_Operator>;
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
    cta?: Maybe<HeroesDocAccessFields_Cta>;
    doodles?: Maybe<HeroesDocAccessFields_Doodles>;
    heading?: Maybe<HeroesDocAccessFields_Heading>;
    headingTag?: Maybe<HeroesDocAccessFields_HeadingTag>;
    homepage?: Maybe<HeroesDocAccessFields_Homepage>;
    icon?: Maybe<HeroesDocAccessFields_Icon>;
    subhead?: Maybe<HeroesDocAccessFields_Subhead>;
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

export type HeroesDocAccessFields_Cta = {
    __typename?: 'HeroesDocAccessFields_cta';
    create?: Maybe<HeroesDocAccessFields_Cta_Create>;
    delete?: Maybe<HeroesDocAccessFields_Cta_Delete>;
    read?: Maybe<HeroesDocAccessFields_Cta_Read>;
    update?: Maybe<HeroesDocAccessFields_Cta_Update>;
};

export type HeroesDocAccessFields_Cta_Create = {
    __typename?: 'HeroesDocAccessFields_cta_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_Delete = {
    __typename?: 'HeroesDocAccessFields_cta_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_Read = {
    __typename?: 'HeroesDocAccessFields_cta_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Cta_Update = {
    __typename?: 'HeroesDocAccessFields_cta_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Doodles = {
    __typename?: 'HeroesDocAccessFields_doodles';
    create?: Maybe<HeroesDocAccessFields_Doodles_Create>;
    delete?: Maybe<HeroesDocAccessFields_Doodles_Delete>;
    read?: Maybe<HeroesDocAccessFields_Doodles_Read>;
    update?: Maybe<HeroesDocAccessFields_Doodles_Update>;
};

export type HeroesDocAccessFields_Doodles_Create = {
    __typename?: 'HeroesDocAccessFields_doodles_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Doodles_Delete = {
    __typename?: 'HeroesDocAccessFields_doodles_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Doodles_Read = {
    __typename?: 'HeroesDocAccessFields_doodles_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Doodles_Update = {
    __typename?: 'HeroesDocAccessFields_doodles_Update';
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

export type HeroesDocAccessFields_Homepage = {
    __typename?: 'HeroesDocAccessFields_homepage';
    create?: Maybe<HeroesDocAccessFields_Homepage_Create>;
    delete?: Maybe<HeroesDocAccessFields_Homepage_Delete>;
    read?: Maybe<HeroesDocAccessFields_Homepage_Read>;
    update?: Maybe<HeroesDocAccessFields_Homepage_Update>;
};

export type HeroesDocAccessFields_Homepage_Create = {
    __typename?: 'HeroesDocAccessFields_homepage_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Homepage_Delete = {
    __typename?: 'HeroesDocAccessFields_homepage_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Homepage_Read = {
    __typename?: 'HeroesDocAccessFields_homepage_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Homepage_Update = {
    __typename?: 'HeroesDocAccessFields_homepage_Update';
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

export type HeroesDocAccessFields_Subhead = {
    __typename?: 'HeroesDocAccessFields_subhead';
    create?: Maybe<HeroesDocAccessFields_Subhead_Create>;
    delete?: Maybe<HeroesDocAccessFields_Subhead_Delete>;
    read?: Maybe<HeroesDocAccessFields_Subhead_Read>;
    update?: Maybe<HeroesDocAccessFields_Subhead_Update>;
};

export type HeroesDocAccessFields_Subhead_Create = {
    __typename?: 'HeroesDocAccessFields_subhead_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Subhead_Delete = {
    __typename?: 'HeroesDocAccessFields_subhead_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Subhead_Read = {
    __typename?: 'HeroesDocAccessFields_subhead_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesDocAccessFields_Subhead_Update = {
    __typename?: 'HeroesDocAccessFields_subhead_Update';
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
    cta?: Maybe<HeroesFields_Cta>;
    doodles?: Maybe<HeroesFields_Doodles>;
    heading?: Maybe<HeroesFields_Heading>;
    headingTag?: Maybe<HeroesFields_HeadingTag>;
    homepage?: Maybe<HeroesFields_Homepage>;
    icon?: Maybe<HeroesFields_Icon>;
    subhead?: Maybe<HeroesFields_Subhead>;
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

export type HeroesFields_Cta = {
    __typename?: 'HeroesFields_cta';
    create?: Maybe<HeroesFields_Cta_Create>;
    delete?: Maybe<HeroesFields_Cta_Delete>;
    read?: Maybe<HeroesFields_Cta_Read>;
    update?: Maybe<HeroesFields_Cta_Update>;
};

export type HeroesFields_Cta_Create = {
    __typename?: 'HeroesFields_cta_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_Delete = {
    __typename?: 'HeroesFields_cta_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_Read = {
    __typename?: 'HeroesFields_cta_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Cta_Update = {
    __typename?: 'HeroesFields_cta_Update';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Doodles = {
    __typename?: 'HeroesFields_doodles';
    create?: Maybe<HeroesFields_Doodles_Create>;
    delete?: Maybe<HeroesFields_Doodles_Delete>;
    read?: Maybe<HeroesFields_Doodles_Read>;
    update?: Maybe<HeroesFields_Doodles_Update>;
};

export type HeroesFields_Doodles_Create = {
    __typename?: 'HeroesFields_doodles_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Doodles_Delete = {
    __typename?: 'HeroesFields_doodles_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Doodles_Read = {
    __typename?: 'HeroesFields_doodles_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Doodles_Update = {
    __typename?: 'HeroesFields_doodles_Update';
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

export type HeroesFields_Homepage = {
    __typename?: 'HeroesFields_homepage';
    create?: Maybe<HeroesFields_Homepage_Create>;
    delete?: Maybe<HeroesFields_Homepage_Delete>;
    read?: Maybe<HeroesFields_Homepage_Read>;
    update?: Maybe<HeroesFields_Homepage_Update>;
};

export type HeroesFields_Homepage_Create = {
    __typename?: 'HeroesFields_homepage_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Homepage_Delete = {
    __typename?: 'HeroesFields_homepage_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Homepage_Read = {
    __typename?: 'HeroesFields_homepage_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Homepage_Update = {
    __typename?: 'HeroesFields_homepage_Update';
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

export type HeroesFields_Subhead = {
    __typename?: 'HeroesFields_subhead';
    create?: Maybe<HeroesFields_Subhead_Create>;
    delete?: Maybe<HeroesFields_Subhead_Delete>;
    read?: Maybe<HeroesFields_Subhead_Read>;
    update?: Maybe<HeroesFields_Subhead_Update>;
};

export type HeroesFields_Subhead_Create = {
    __typename?: 'HeroesFields_subhead_Create';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Subhead_Delete = {
    __typename?: 'HeroesFields_subhead_Delete';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Subhead_Read = {
    __typename?: 'HeroesFields_subhead_Read';
    permission: Scalars['Boolean']['output'];
};

export type HeroesFields_Subhead_Update = {
    __typename?: 'HeroesFields_subhead_Update';
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
    base64?: Maybe<Scalars['String']['output']>;
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

export type Icon_Base64_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
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
    base64?: InputMaybe<Icon_Base64_Operator>;
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
    base64?: InputMaybe<Icon_Base64_Operator>;
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
    base64?: InputMaybe<Icon_Base64_Operator>;
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
    base64?: Maybe<IconsDocAccessFields_Base64>;
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

export type IconsDocAccessFields_Base64 = {
    __typename?: 'IconsDocAccessFields_base64';
    create?: Maybe<IconsDocAccessFields_Base64_Create>;
    delete?: Maybe<IconsDocAccessFields_Base64_Delete>;
    read?: Maybe<IconsDocAccessFields_Base64_Read>;
    update?: Maybe<IconsDocAccessFields_Base64_Update>;
};

export type IconsDocAccessFields_Base64_Create = {
    __typename?: 'IconsDocAccessFields_base64_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Base64_Delete = {
    __typename?: 'IconsDocAccessFields_base64_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Base64_Read = {
    __typename?: 'IconsDocAccessFields_base64_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsDocAccessFields_Base64_Update = {
    __typename?: 'IconsDocAccessFields_base64_Update';
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
    base64?: Maybe<IconsFields_Base64>;
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

export type IconsFields_Base64 = {
    __typename?: 'IconsFields_base64';
    create?: Maybe<IconsFields_Base64_Create>;
    delete?: Maybe<IconsFields_Base64_Delete>;
    read?: Maybe<IconsFields_Base64_Read>;
    update?: Maybe<IconsFields_Base64_Update>;
};

export type IconsFields_Base64_Create = {
    __typename?: 'IconsFields_base64_Create';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Base64_Delete = {
    __typename?: 'IconsFields_base64_Delete';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Base64_Read = {
    __typename?: 'IconsFields_base64_Read';
    permission: Scalars['Boolean']['output'];
};

export type IconsFields_Base64_Update = {
    __typename?: 'IconsFields_base64_Update';
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
    base64?: Maybe<Scalars['String']['output']>;
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

export type ImageBlock = {
    __typename?: 'ImageBlock';
    blockName?: Maybe<Scalars['String']['output']>;
    blockType?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    image?: Maybe<Image>;
};

export type ImageBlockImageArgs = {
    where?: InputMaybe<ImageBlock_Image_Where>;
};

export type ImageBlock_Image_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ImageBlock_Image_Base64_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ImageBlock_Image_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ImageBlock_Image_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ImageBlock_Image_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type ImageBlock_Image_Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type ImageBlock_Image_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ImageBlock_Image_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ImageBlock_Image_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ImageBlock_Image_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type ImageBlock_Image_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type ImageBlock_Image_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ImageBlock_Image_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ImageBlock_Image_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type ImageBlock_Image_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ImageBlock_Image_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ImageBlock_Image_Where = {
    AND?: InputMaybe<Array<InputMaybe<ImageBlock_Image_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<ImageBlock_Image_Where_Or>>>;
    alt?: InputMaybe<ImageBlock_Image_Alt_Operator>;
    base64?: InputMaybe<ImageBlock_Image_Base64_Operator>;
    createdAt?: InputMaybe<ImageBlock_Image_CreatedAt_Operator>;
    filename?: InputMaybe<ImageBlock_Image_Filename_Operator>;
    filesize?: InputMaybe<ImageBlock_Image_Filesize_Operator>;
    height?: InputMaybe<ImageBlock_Image_Height_Operator>;
    id?: InputMaybe<ImageBlock_Image_Id_Operator>;
    mimeType?: InputMaybe<ImageBlock_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<ImageBlock_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<ImageBlock_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<ImageBlock_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<ImageBlock_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<ImageBlock_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<ImageBlock_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<ImageBlock_Image_UpdatedAt_Operator>;
    url?: InputMaybe<ImageBlock_Image_Url_Operator>;
    width?: InputMaybe<ImageBlock_Image_Width_Operator>;
};

export type ImageBlock_Image_Where_And = {
    alt?: InputMaybe<ImageBlock_Image_Alt_Operator>;
    base64?: InputMaybe<ImageBlock_Image_Base64_Operator>;
    createdAt?: InputMaybe<ImageBlock_Image_CreatedAt_Operator>;
    filename?: InputMaybe<ImageBlock_Image_Filename_Operator>;
    filesize?: InputMaybe<ImageBlock_Image_Filesize_Operator>;
    height?: InputMaybe<ImageBlock_Image_Height_Operator>;
    id?: InputMaybe<ImageBlock_Image_Id_Operator>;
    mimeType?: InputMaybe<ImageBlock_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<ImageBlock_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<ImageBlock_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<ImageBlock_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<ImageBlock_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<ImageBlock_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<ImageBlock_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<ImageBlock_Image_UpdatedAt_Operator>;
    url?: InputMaybe<ImageBlock_Image_Url_Operator>;
    width?: InputMaybe<ImageBlock_Image_Width_Operator>;
};

export type ImageBlock_Image_Where_Or = {
    alt?: InputMaybe<ImageBlock_Image_Alt_Operator>;
    base64?: InputMaybe<ImageBlock_Image_Base64_Operator>;
    createdAt?: InputMaybe<ImageBlock_Image_CreatedAt_Operator>;
    filename?: InputMaybe<ImageBlock_Image_Filename_Operator>;
    filesize?: InputMaybe<ImageBlock_Image_Filesize_Operator>;
    height?: InputMaybe<ImageBlock_Image_Height_Operator>;
    id?: InputMaybe<ImageBlock_Image_Id_Operator>;
    mimeType?: InputMaybe<ImageBlock_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<ImageBlock_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<ImageBlock_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<ImageBlock_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<ImageBlock_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<ImageBlock_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<ImageBlock_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<ImageBlock_Image_UpdatedAt_Operator>;
    url?: InputMaybe<ImageBlock_Image_Url_Operator>;
    width?: InputMaybe<ImageBlock_Image_Width_Operator>;
};

export type ImageBlock_Image_Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
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

export type Image_Base64_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
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
    base64?: InputMaybe<Image_Base64_Operator>;
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
    base64?: InputMaybe<Image_Base64_Operator>;
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
    base64?: InputMaybe<Image_Base64_Operator>;
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
    base64?: Maybe<ImagesDocAccessFields_Base64>;
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

export type ImagesDocAccessFields_Base64 = {
    __typename?: 'ImagesDocAccessFields_base64';
    create?: Maybe<ImagesDocAccessFields_Base64_Create>;
    delete?: Maybe<ImagesDocAccessFields_Base64_Delete>;
    read?: Maybe<ImagesDocAccessFields_Base64_Read>;
    update?: Maybe<ImagesDocAccessFields_Base64_Update>;
};

export type ImagesDocAccessFields_Base64_Create = {
    __typename?: 'ImagesDocAccessFields_base64_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Base64_Delete = {
    __typename?: 'ImagesDocAccessFields_base64_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Base64_Read = {
    __typename?: 'ImagesDocAccessFields_base64_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesDocAccessFields_Base64_Update = {
    __typename?: 'ImagesDocAccessFields_base64_Update';
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
    base64?: Maybe<ImagesFields_Base64>;
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

export type ImagesFields_Base64 = {
    __typename?: 'ImagesFields_base64';
    create?: Maybe<ImagesFields_Base64_Create>;
    delete?: Maybe<ImagesFields_Base64_Delete>;
    read?: Maybe<ImagesFields_Base64_Read>;
    update?: Maybe<ImagesFields_Base64_Update>;
};

export type ImagesFields_Base64_Create = {
    __typename?: 'ImagesFields_base64_Create';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Base64_Delete = {
    __typename?: 'ImagesFields_base64_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Base64_Read = {
    __typename?: 'ImagesFields_base64_Read';
    permission: Scalars['Boolean']['output'];
};

export type ImagesFields_Base64_Update = {
    __typename?: 'ImagesFields_base64_Update';
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
    createCaseStudy?: Maybe<CaseStudy>;
    createCta?: Maybe<Cta>;
    createHero?: Maybe<Hero>;
    createIcon?: Maybe<Icon>;
    createImage?: Maybe<Image>;
    createPage?: Maybe<Page>;
    createProject?: Maybe<Project>;
    createSocial?: Maybe<Social>;
    createTestimonial?: Maybe<Testimonial>;
    createTool?: Maybe<Tool>;
    createUser?: Maybe<User>;
    deleteCaseStudy?: Maybe<CaseStudy>;
    deleteCta?: Maybe<Cta>;
    deleteHero?: Maybe<Hero>;
    deleteIcon?: Maybe<Icon>;
    deleteImage?: Maybe<Image>;
    deletePage?: Maybe<Page>;
    deletePreference?: Maybe<Preference>;
    deleteProject?: Maybe<Project>;
    deleteSocial?: Maybe<Social>;
    deleteTestimonial?: Maybe<Testimonial>;
    deleteTool?: Maybe<Tool>;
    deleteUser?: Maybe<User>;
    forgotPasswordUser: Scalars['Boolean']['output'];
    loginUser?: Maybe<UsersLoginResult>;
    logoutUser?: Maybe<Scalars['String']['output']>;
    refreshTokenUser?: Maybe<UsersRefreshedUser>;
    resetPasswordUser?: Maybe<UsersResetPassword>;
    unlockUser: Scalars['Boolean']['output'];
    updateAbout?: Maybe<About>;
    updateCaseStudy?: Maybe<CaseStudy>;
    updateCaseStudyListing?: Maybe<CaseStudyListing>;
    updateCta?: Maybe<Cta>;
    updateHero?: Maybe<Hero>;
    updateIcon?: Maybe<Icon>;
    updateImage?: Maybe<Image>;
    updateNav?: Maybe<Nav>;
    updatePage?: Maybe<Page>;
    updatePreference?: Maybe<Preference>;
    updateProject?: Maybe<Project>;
    updateSocial?: Maybe<Social>;
    updateTestimonial?: Maybe<Testimonial>;
    updateTestimonialListing?: Maybe<TestimonialListing>;
    updateTool?: Maybe<Tool>;
    updateToolboxListing?: Maybe<ToolboxListing>;
    updateUser?: Maybe<User>;
    verifyEmailUser?: Maybe<Scalars['Boolean']['output']>;
};

export type MutationCreateCaseStudyArgs = {
    data: MutationCaseStudyInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreateCtaArgs = {
    data: MutationCtaInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
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

export type MutationCreateSocialArgs = {
    data: MutationSocialInput;
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

export type MutationDeleteCaseStudyArgs = {
    id: Scalars['String']['input'];
};

export type MutationDeleteCtaArgs = {
    id: Scalars['String']['input'];
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

export type MutationDeleteSocialArgs = {
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

export type MutationUpdateAboutArgs = {
    data: MutationAboutInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationUpdateCaseStudyArgs = {
    autosave?: InputMaybe<Scalars['Boolean']['input']>;
    data: MutationCaseStudyUpdateInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type MutationUpdateCaseStudyListingArgs = {
    data: MutationCaseStudyListingInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationUpdateCtaArgs = {
    autosave?: InputMaybe<Scalars['Boolean']['input']>;
    data: MutationCtaUpdateInput;
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
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

export type MutationUpdateSocialArgs = {
    autosave?: InputMaybe<Scalars['Boolean']['input']>;
    data: MutationSocialUpdateInput;
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
    linkToSection?: Maybe<NavDocAccessFields_MenuItems_LinkToSection>;
    overridePageName?: Maybe<NavDocAccessFields_MenuItems_OverridePageName>;
    page?: Maybe<NavDocAccessFields_MenuItems_Page>;
    sectionId?: Maybe<NavDocAccessFields_MenuItems_SectionId>;
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

export type NavDocAccessFields_MenuItems_LinkToSection = {
    __typename?: 'NavDocAccessFields_menuItems_linkToSection';
    create?: Maybe<NavDocAccessFields_MenuItems_LinkToSection_Create>;
    delete?: Maybe<NavDocAccessFields_MenuItems_LinkToSection_Delete>;
    read?: Maybe<NavDocAccessFields_MenuItems_LinkToSection_Read>;
    update?: Maybe<NavDocAccessFields_MenuItems_LinkToSection_Update>;
};

export type NavDocAccessFields_MenuItems_LinkToSection_Create = {
    __typename?: 'NavDocAccessFields_menuItems_linkToSection_Create';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_MenuItems_LinkToSection_Delete = {
    __typename?: 'NavDocAccessFields_menuItems_linkToSection_Delete';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_MenuItems_LinkToSection_Read = {
    __typename?: 'NavDocAccessFields_menuItems_linkToSection_Read';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_MenuItems_LinkToSection_Update = {
    __typename?: 'NavDocAccessFields_menuItems_linkToSection_Update';
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

export type NavDocAccessFields_MenuItems_SectionId = {
    __typename?: 'NavDocAccessFields_menuItems_sectionId';
    create?: Maybe<NavDocAccessFields_MenuItems_SectionId_Create>;
    delete?: Maybe<NavDocAccessFields_MenuItems_SectionId_Delete>;
    read?: Maybe<NavDocAccessFields_MenuItems_SectionId_Read>;
    update?: Maybe<NavDocAccessFields_MenuItems_SectionId_Update>;
};

export type NavDocAccessFields_MenuItems_SectionId_Create = {
    __typename?: 'NavDocAccessFields_menuItems_sectionId_Create';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_MenuItems_SectionId_Delete = {
    __typename?: 'NavDocAccessFields_menuItems_sectionId_Delete';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_MenuItems_SectionId_Read = {
    __typename?: 'NavDocAccessFields_menuItems_sectionId_Read';
    permission: Scalars['Boolean']['output'];
};

export type NavDocAccessFields_MenuItems_SectionId_Update = {
    __typename?: 'NavDocAccessFields_menuItems_sectionId_Update';
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
    linkToSection?: Maybe<NavFields_MenuItems_LinkToSection>;
    overridePageName?: Maybe<NavFields_MenuItems_OverridePageName>;
    page?: Maybe<NavFields_MenuItems_Page>;
    sectionId?: Maybe<NavFields_MenuItems_SectionId>;
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

export type NavFields_MenuItems_LinkToSection = {
    __typename?: 'NavFields_menuItems_linkToSection';
    create?: Maybe<NavFields_MenuItems_LinkToSection_Create>;
    delete?: Maybe<NavFields_MenuItems_LinkToSection_Delete>;
    read?: Maybe<NavFields_MenuItems_LinkToSection_Read>;
    update?: Maybe<NavFields_MenuItems_LinkToSection_Update>;
};

export type NavFields_MenuItems_LinkToSection_Create = {
    __typename?: 'NavFields_menuItems_linkToSection_Create';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_MenuItems_LinkToSection_Delete = {
    __typename?: 'NavFields_menuItems_linkToSection_Delete';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_MenuItems_LinkToSection_Read = {
    __typename?: 'NavFields_menuItems_linkToSection_Read';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_MenuItems_LinkToSection_Update = {
    __typename?: 'NavFields_menuItems_linkToSection_Update';
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

export type NavFields_MenuItems_SectionId = {
    __typename?: 'NavFields_menuItems_sectionId';
    create?: Maybe<NavFields_MenuItems_SectionId_Create>;
    delete?: Maybe<NavFields_MenuItems_SectionId_Delete>;
    read?: Maybe<NavFields_MenuItems_SectionId_Read>;
    update?: Maybe<NavFields_MenuItems_SectionId_Update>;
};

export type NavFields_MenuItems_SectionId_Create = {
    __typename?: 'NavFields_menuItems_sectionId_Create';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_MenuItems_SectionId_Delete = {
    __typename?: 'NavFields_menuItems_sectionId_Delete';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_MenuItems_SectionId_Read = {
    __typename?: 'NavFields_menuItems_sectionId_Read';
    permission: Scalars['Boolean']['output'];
};

export type NavFields_MenuItems_SectionId_Update = {
    __typename?: 'NavFields_menuItems_sectionId_Update';
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
    linkToSection?: Maybe<Scalars['Boolean']['output']>;
    overridePageName?: Maybe<Scalars['Boolean']['output']>;
    page?: Maybe<Page>;
    sectionId?: Maybe<Scalars['String']['output']>;
};

export type Page = {
    __typename?: 'Page';
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    meta?: Maybe<Page_Meta>;
    pageSections?: Maybe<Array<Page_PageSections>>;
    slug?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Page_Meta = {
    __typename?: 'Page_Meta';
    description?: Maybe<Scalars['String']['output']>;
    image?: Maybe<Image>;
    noIndex?: Maybe<Scalars['Boolean']['output']>;
    title?: Maybe<Scalars['String']['output']>;
};

export type Page_MetaImageArgs = {
    where?: InputMaybe<Page_Meta_Image_Where>;
};

export type Page_Meta_Image_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Meta_Image_Base64_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Meta_Image_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Page_Meta_Image_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Meta_Image_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Page_Meta_Image_Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Page_Meta_Image_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Meta_Image_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Meta_Image_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Meta_Image_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Page_Meta_Image_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Page_Meta_Image_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Meta_Image_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Meta_Image_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Page_Meta_Image_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Page_Meta_Image_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Meta_Image_Where = {
    AND?: InputMaybe<Array<InputMaybe<Page_Meta_Image_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<Page_Meta_Image_Where_Or>>>;
    alt?: InputMaybe<Page_Meta_Image_Alt_Operator>;
    base64?: InputMaybe<Page_Meta_Image_Base64_Operator>;
    createdAt?: InputMaybe<Page_Meta_Image_CreatedAt_Operator>;
    filename?: InputMaybe<Page_Meta_Image_Filename_Operator>;
    filesize?: InputMaybe<Page_Meta_Image_Filesize_Operator>;
    height?: InputMaybe<Page_Meta_Image_Height_Operator>;
    id?: InputMaybe<Page_Meta_Image_Id_Operator>;
    mimeType?: InputMaybe<Page_Meta_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Page_Meta_Image_UpdatedAt_Operator>;
    url?: InputMaybe<Page_Meta_Image_Url_Operator>;
    width?: InputMaybe<Page_Meta_Image_Width_Operator>;
};

export type Page_Meta_Image_Where_And = {
    alt?: InputMaybe<Page_Meta_Image_Alt_Operator>;
    base64?: InputMaybe<Page_Meta_Image_Base64_Operator>;
    createdAt?: InputMaybe<Page_Meta_Image_CreatedAt_Operator>;
    filename?: InputMaybe<Page_Meta_Image_Filename_Operator>;
    filesize?: InputMaybe<Page_Meta_Image_Filesize_Operator>;
    height?: InputMaybe<Page_Meta_Image_Height_Operator>;
    id?: InputMaybe<Page_Meta_Image_Id_Operator>;
    mimeType?: InputMaybe<Page_Meta_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Page_Meta_Image_UpdatedAt_Operator>;
    url?: InputMaybe<Page_Meta_Image_Url_Operator>;
    width?: InputMaybe<Page_Meta_Image_Width_Operator>;
};

export type Page_Meta_Image_Where_Or = {
    alt?: InputMaybe<Page_Meta_Image_Alt_Operator>;
    base64?: InputMaybe<Page_Meta_Image_Base64_Operator>;
    createdAt?: InputMaybe<Page_Meta_Image_CreatedAt_Operator>;
    filename?: InputMaybe<Page_Meta_Image_Filename_Operator>;
    filesize?: InputMaybe<Page_Meta_Image_Filesize_Operator>;
    height?: InputMaybe<Page_Meta_Image_Height_Operator>;
    id?: InputMaybe<Page_Meta_Image_Id_Operator>;
    mimeType?: InputMaybe<Page_Meta_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Page_Meta_Image_UpdatedAt_Operator>;
    url?: InputMaybe<Page_Meta_Image_Url_Operator>;
    width?: InputMaybe<Page_Meta_Image_Width_Operator>;
};

export type Page_Meta_Image_Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Page_PageSections = HeroBlock | SingleUseBlock | SocialsBlock;

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

export type Page_Meta__Description_Operator = {
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Page_Meta__Image_Operator = {
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Page_Meta__NoIndex_Operator = {
    equals?: InputMaybe<Scalars['Boolean']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Page_Meta__Title_Operator = {
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
    meta__description?: InputMaybe<Page_Meta__Description_Operator>;
    meta__image?: InputMaybe<Page_Meta__Image_Operator>;
    meta__noIndex?: InputMaybe<Page_Meta__NoIndex_Operator>;
    meta__title?: InputMaybe<Page_Meta__Title_Operator>;
    slug?: InputMaybe<Page_Slug_Operator>;
    title?: InputMaybe<Page_Title_Operator>;
    updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Page_Where_And = {
    createdAt?: InputMaybe<Page_CreatedAt_Operator>;
    id?: InputMaybe<Page_Id_Operator>;
    meta__description?: InputMaybe<Page_Meta__Description_Operator>;
    meta__image?: InputMaybe<Page_Meta__Image_Operator>;
    meta__noIndex?: InputMaybe<Page_Meta__NoIndex_Operator>;
    meta__title?: InputMaybe<Page_Meta__Title_Operator>;
    slug?: InputMaybe<Page_Slug_Operator>;
    title?: InputMaybe<Page_Title_Operator>;
    updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Page_Where_Or = {
    createdAt?: InputMaybe<Page_CreatedAt_Operator>;
    id?: InputMaybe<Page_Id_Operator>;
    meta__description?: InputMaybe<Page_Meta__Description_Operator>;
    meta__image?: InputMaybe<Page_Meta__Image_Operator>;
    meta__noIndex?: InputMaybe<Page_Meta__NoIndex_Operator>;
    meta__title?: InputMaybe<Page_Meta__Title_Operator>;
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
    meta?: Maybe<PagesDocAccessFields_Meta>;
    pageSections?: Maybe<PagesDocAccessFields_PageSections>;
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

export type PagesDocAccessFields_Meta = {
    __typename?: 'PagesDocAccessFields_meta';
    create?: Maybe<PagesDocAccessFields_Meta_Create>;
    delete?: Maybe<PagesDocAccessFields_Meta_Delete>;
    fields?: Maybe<PagesDocAccessFields_Meta_Fields>;
    read?: Maybe<PagesDocAccessFields_Meta_Read>;
    update?: Maybe<PagesDocAccessFields_Meta_Update>;
};

export type PagesDocAccessFields_Meta_Create = {
    __typename?: 'PagesDocAccessFields_meta_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Delete = {
    __typename?: 'PagesDocAccessFields_meta_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Fields = {
    __typename?: 'PagesDocAccessFields_meta_Fields';
    description?: Maybe<PagesDocAccessFields_Meta_Description>;
    image?: Maybe<PagesDocAccessFields_Meta_Image>;
    noIndex?: Maybe<PagesDocAccessFields_Meta_NoIndex>;
    overview?: Maybe<PagesDocAccessFields_Meta_Overview>;
    preview?: Maybe<PagesDocAccessFields_Meta_Preview>;
    title?: Maybe<PagesDocAccessFields_Meta_Title>;
};

export type PagesDocAccessFields_Meta_Read = {
    __typename?: 'PagesDocAccessFields_meta_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Update = {
    __typename?: 'PagesDocAccessFields_meta_Update';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Description = {
    __typename?: 'PagesDocAccessFields_meta_description';
    create?: Maybe<PagesDocAccessFields_Meta_Description_Create>;
    delete?: Maybe<PagesDocAccessFields_Meta_Description_Delete>;
    read?: Maybe<PagesDocAccessFields_Meta_Description_Read>;
    update?: Maybe<PagesDocAccessFields_Meta_Description_Update>;
};

export type PagesDocAccessFields_Meta_Description_Create = {
    __typename?: 'PagesDocAccessFields_meta_description_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Description_Delete = {
    __typename?: 'PagesDocAccessFields_meta_description_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Description_Read = {
    __typename?: 'PagesDocAccessFields_meta_description_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Description_Update = {
    __typename?: 'PagesDocAccessFields_meta_description_Update';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Image = {
    __typename?: 'PagesDocAccessFields_meta_image';
    create?: Maybe<PagesDocAccessFields_Meta_Image_Create>;
    delete?: Maybe<PagesDocAccessFields_Meta_Image_Delete>;
    read?: Maybe<PagesDocAccessFields_Meta_Image_Read>;
    update?: Maybe<PagesDocAccessFields_Meta_Image_Update>;
};

export type PagesDocAccessFields_Meta_Image_Create = {
    __typename?: 'PagesDocAccessFields_meta_image_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Image_Delete = {
    __typename?: 'PagesDocAccessFields_meta_image_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Image_Read = {
    __typename?: 'PagesDocAccessFields_meta_image_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Image_Update = {
    __typename?: 'PagesDocAccessFields_meta_image_Update';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_NoIndex = {
    __typename?: 'PagesDocAccessFields_meta_noIndex';
    create?: Maybe<PagesDocAccessFields_Meta_NoIndex_Create>;
    delete?: Maybe<PagesDocAccessFields_Meta_NoIndex_Delete>;
    read?: Maybe<PagesDocAccessFields_Meta_NoIndex_Read>;
    update?: Maybe<PagesDocAccessFields_Meta_NoIndex_Update>;
};

export type PagesDocAccessFields_Meta_NoIndex_Create = {
    __typename?: 'PagesDocAccessFields_meta_noIndex_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_NoIndex_Delete = {
    __typename?: 'PagesDocAccessFields_meta_noIndex_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_NoIndex_Read = {
    __typename?: 'PagesDocAccessFields_meta_noIndex_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_NoIndex_Update = {
    __typename?: 'PagesDocAccessFields_meta_noIndex_Update';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Overview = {
    __typename?: 'PagesDocAccessFields_meta_overview';
    create?: Maybe<PagesDocAccessFields_Meta_Overview_Create>;
    delete?: Maybe<PagesDocAccessFields_Meta_Overview_Delete>;
    read?: Maybe<PagesDocAccessFields_Meta_Overview_Read>;
    update?: Maybe<PagesDocAccessFields_Meta_Overview_Update>;
};

export type PagesDocAccessFields_Meta_Overview_Create = {
    __typename?: 'PagesDocAccessFields_meta_overview_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Overview_Delete = {
    __typename?: 'PagesDocAccessFields_meta_overview_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Overview_Read = {
    __typename?: 'PagesDocAccessFields_meta_overview_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Overview_Update = {
    __typename?: 'PagesDocAccessFields_meta_overview_Update';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Preview = {
    __typename?: 'PagesDocAccessFields_meta_preview';
    create?: Maybe<PagesDocAccessFields_Meta_Preview_Create>;
    delete?: Maybe<PagesDocAccessFields_Meta_Preview_Delete>;
    read?: Maybe<PagesDocAccessFields_Meta_Preview_Read>;
    update?: Maybe<PagesDocAccessFields_Meta_Preview_Update>;
};

export type PagesDocAccessFields_Meta_Preview_Create = {
    __typename?: 'PagesDocAccessFields_meta_preview_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Preview_Delete = {
    __typename?: 'PagesDocAccessFields_meta_preview_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Preview_Read = {
    __typename?: 'PagesDocAccessFields_meta_preview_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Preview_Update = {
    __typename?: 'PagesDocAccessFields_meta_preview_Update';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Title = {
    __typename?: 'PagesDocAccessFields_meta_title';
    create?: Maybe<PagesDocAccessFields_Meta_Title_Create>;
    delete?: Maybe<PagesDocAccessFields_Meta_Title_Delete>;
    read?: Maybe<PagesDocAccessFields_Meta_Title_Read>;
    update?: Maybe<PagesDocAccessFields_Meta_Title_Update>;
};

export type PagesDocAccessFields_Meta_Title_Create = {
    __typename?: 'PagesDocAccessFields_meta_title_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Title_Delete = {
    __typename?: 'PagesDocAccessFields_meta_title_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Title_Read = {
    __typename?: 'PagesDocAccessFields_meta_title_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Title_Update = {
    __typename?: 'PagesDocAccessFields_meta_title_Update';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_PageSections = {
    __typename?: 'PagesDocAccessFields_pageSections';
    create?: Maybe<PagesDocAccessFields_PageSections_Create>;
    delete?: Maybe<PagesDocAccessFields_PageSections_Delete>;
    read?: Maybe<PagesDocAccessFields_PageSections_Read>;
    update?: Maybe<PagesDocAccessFields_PageSections_Update>;
};

export type PagesDocAccessFields_PageSections_Create = {
    __typename?: 'PagesDocAccessFields_pageSections_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_PageSections_Delete = {
    __typename?: 'PagesDocAccessFields_pageSections_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_PageSections_Read = {
    __typename?: 'PagesDocAccessFields_pageSections_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_PageSections_Update = {
    __typename?: 'PagesDocAccessFields_pageSections_Update';
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
    meta?: Maybe<PagesFields_Meta>;
    pageSections?: Maybe<PagesFields_PageSections>;
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

export type PagesFields_Meta = {
    __typename?: 'PagesFields_meta';
    create?: Maybe<PagesFields_Meta_Create>;
    delete?: Maybe<PagesFields_Meta_Delete>;
    fields?: Maybe<PagesFields_Meta_Fields>;
    read?: Maybe<PagesFields_Meta_Read>;
    update?: Maybe<PagesFields_Meta_Update>;
};

export type PagesFields_Meta_Create = {
    __typename?: 'PagesFields_meta_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Delete = {
    __typename?: 'PagesFields_meta_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Fields = {
    __typename?: 'PagesFields_meta_Fields';
    description?: Maybe<PagesFields_Meta_Description>;
    image?: Maybe<PagesFields_Meta_Image>;
    noIndex?: Maybe<PagesFields_Meta_NoIndex>;
    overview?: Maybe<PagesFields_Meta_Overview>;
    preview?: Maybe<PagesFields_Meta_Preview>;
    title?: Maybe<PagesFields_Meta_Title>;
};

export type PagesFields_Meta_Read = {
    __typename?: 'PagesFields_meta_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Update = {
    __typename?: 'PagesFields_meta_Update';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Description = {
    __typename?: 'PagesFields_meta_description';
    create?: Maybe<PagesFields_Meta_Description_Create>;
    delete?: Maybe<PagesFields_Meta_Description_Delete>;
    read?: Maybe<PagesFields_Meta_Description_Read>;
    update?: Maybe<PagesFields_Meta_Description_Update>;
};

export type PagesFields_Meta_Description_Create = {
    __typename?: 'PagesFields_meta_description_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Description_Delete = {
    __typename?: 'PagesFields_meta_description_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Description_Read = {
    __typename?: 'PagesFields_meta_description_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Description_Update = {
    __typename?: 'PagesFields_meta_description_Update';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Image = {
    __typename?: 'PagesFields_meta_image';
    create?: Maybe<PagesFields_Meta_Image_Create>;
    delete?: Maybe<PagesFields_Meta_Image_Delete>;
    read?: Maybe<PagesFields_Meta_Image_Read>;
    update?: Maybe<PagesFields_Meta_Image_Update>;
};

export type PagesFields_Meta_Image_Create = {
    __typename?: 'PagesFields_meta_image_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Image_Delete = {
    __typename?: 'PagesFields_meta_image_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Image_Read = {
    __typename?: 'PagesFields_meta_image_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Image_Update = {
    __typename?: 'PagesFields_meta_image_Update';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_NoIndex = {
    __typename?: 'PagesFields_meta_noIndex';
    create?: Maybe<PagesFields_Meta_NoIndex_Create>;
    delete?: Maybe<PagesFields_Meta_NoIndex_Delete>;
    read?: Maybe<PagesFields_Meta_NoIndex_Read>;
    update?: Maybe<PagesFields_Meta_NoIndex_Update>;
};

export type PagesFields_Meta_NoIndex_Create = {
    __typename?: 'PagesFields_meta_noIndex_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_NoIndex_Delete = {
    __typename?: 'PagesFields_meta_noIndex_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_NoIndex_Read = {
    __typename?: 'PagesFields_meta_noIndex_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_NoIndex_Update = {
    __typename?: 'PagesFields_meta_noIndex_Update';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Overview = {
    __typename?: 'PagesFields_meta_overview';
    create?: Maybe<PagesFields_Meta_Overview_Create>;
    delete?: Maybe<PagesFields_Meta_Overview_Delete>;
    read?: Maybe<PagesFields_Meta_Overview_Read>;
    update?: Maybe<PagesFields_Meta_Overview_Update>;
};

export type PagesFields_Meta_Overview_Create = {
    __typename?: 'PagesFields_meta_overview_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Overview_Delete = {
    __typename?: 'PagesFields_meta_overview_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Overview_Read = {
    __typename?: 'PagesFields_meta_overview_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Overview_Update = {
    __typename?: 'PagesFields_meta_overview_Update';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Preview = {
    __typename?: 'PagesFields_meta_preview';
    create?: Maybe<PagesFields_Meta_Preview_Create>;
    delete?: Maybe<PagesFields_Meta_Preview_Delete>;
    read?: Maybe<PagesFields_Meta_Preview_Read>;
    update?: Maybe<PagesFields_Meta_Preview_Update>;
};

export type PagesFields_Meta_Preview_Create = {
    __typename?: 'PagesFields_meta_preview_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Preview_Delete = {
    __typename?: 'PagesFields_meta_preview_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Preview_Read = {
    __typename?: 'PagesFields_meta_preview_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Preview_Update = {
    __typename?: 'PagesFields_meta_preview_Update';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Title = {
    __typename?: 'PagesFields_meta_title';
    create?: Maybe<PagesFields_Meta_Title_Create>;
    delete?: Maybe<PagesFields_Meta_Title_Delete>;
    read?: Maybe<PagesFields_Meta_Title_Read>;
    update?: Maybe<PagesFields_Meta_Title_Update>;
};

export type PagesFields_Meta_Title_Create = {
    __typename?: 'PagesFields_meta_title_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Title_Delete = {
    __typename?: 'PagesFields_meta_title_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Title_Read = {
    __typename?: 'PagesFields_meta_title_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Title_Update = {
    __typename?: 'PagesFields_meta_title_Update';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_PageSections = {
    __typename?: 'PagesFields_pageSections';
    create?: Maybe<PagesFields_PageSections_Create>;
    delete?: Maybe<PagesFields_PageSections_Delete>;
    read?: Maybe<PagesFields_PageSections_Read>;
    update?: Maybe<PagesFields_PageSections_Update>;
};

export type PagesFields_PageSections_Create = {
    __typename?: 'PagesFields_pageSections_Create';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_PageSections_Delete = {
    __typename?: 'PagesFields_pageSections_Delete';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_PageSections_Read = {
    __typename?: 'PagesFields_pageSections_Read';
    permission: Scalars['Boolean']['output'];
};

export type PagesFields_PageSections_Update = {
    __typename?: 'PagesFields_pageSections_Update';
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
    caseStudies?: Maybe<Array<CaseStudy>>;
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    excerpt?: Maybe<Scalars['String']['output']>;
    featuredImage?: Maybe<Image>;
    id?: Maybe<Scalars['String']['output']>;
    intro?: Maybe<Project_Intro>;
    meta?: Maybe<Project_Meta>;
    projectSections?: Maybe<Array<Project_ProjectSections>>;
    slug?: Maybe<Scalars['String']['output']>;
    title?: Maybe<Scalars['String']['output']>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ProjectFeaturedImageArgs = {
    where?: InputMaybe<Project_FeaturedImage_Where>;
};

export type Project_FeaturedImage_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_FeaturedImage_Base64_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_FeaturedImage_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Project_FeaturedImage_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_FeaturedImage_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Project_FeaturedImage_Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Project_FeaturedImage_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_FeaturedImage_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_FeaturedImage_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_FeaturedImage_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Project_FeaturedImage_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Project_FeaturedImage_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_FeaturedImage_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_FeaturedImage_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Project_FeaturedImage_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Project_FeaturedImage_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_FeaturedImage_Where = {
    AND?: InputMaybe<Array<InputMaybe<Project_FeaturedImage_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<Project_FeaturedImage_Where_Or>>>;
    alt?: InputMaybe<Project_FeaturedImage_Alt_Operator>;
    base64?: InputMaybe<Project_FeaturedImage_Base64_Operator>;
    createdAt?: InputMaybe<Project_FeaturedImage_CreatedAt_Operator>;
    filename?: InputMaybe<Project_FeaturedImage_Filename_Operator>;
    filesize?: InputMaybe<Project_FeaturedImage_Filesize_Operator>;
    height?: InputMaybe<Project_FeaturedImage_Height_Operator>;
    id?: InputMaybe<Project_FeaturedImage_Id_Operator>;
    mimeType?: InputMaybe<Project_FeaturedImage_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Project_FeaturedImage_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Project_FeaturedImage_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Project_FeaturedImage_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Project_FeaturedImage_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Project_FeaturedImage_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Project_FeaturedImage_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Project_FeaturedImage_UpdatedAt_Operator>;
    url?: InputMaybe<Project_FeaturedImage_Url_Operator>;
    width?: InputMaybe<Project_FeaturedImage_Width_Operator>;
};

export type Project_FeaturedImage_Where_And = {
    alt?: InputMaybe<Project_FeaturedImage_Alt_Operator>;
    base64?: InputMaybe<Project_FeaturedImage_Base64_Operator>;
    createdAt?: InputMaybe<Project_FeaturedImage_CreatedAt_Operator>;
    filename?: InputMaybe<Project_FeaturedImage_Filename_Operator>;
    filesize?: InputMaybe<Project_FeaturedImage_Filesize_Operator>;
    height?: InputMaybe<Project_FeaturedImage_Height_Operator>;
    id?: InputMaybe<Project_FeaturedImage_Id_Operator>;
    mimeType?: InputMaybe<Project_FeaturedImage_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Project_FeaturedImage_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Project_FeaturedImage_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Project_FeaturedImage_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Project_FeaturedImage_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Project_FeaturedImage_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Project_FeaturedImage_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Project_FeaturedImage_UpdatedAt_Operator>;
    url?: InputMaybe<Project_FeaturedImage_Url_Operator>;
    width?: InputMaybe<Project_FeaturedImage_Width_Operator>;
};

export type Project_FeaturedImage_Where_Or = {
    alt?: InputMaybe<Project_FeaturedImage_Alt_Operator>;
    base64?: InputMaybe<Project_FeaturedImage_Base64_Operator>;
    createdAt?: InputMaybe<Project_FeaturedImage_CreatedAt_Operator>;
    filename?: InputMaybe<Project_FeaturedImage_Filename_Operator>;
    filesize?: InputMaybe<Project_FeaturedImage_Filesize_Operator>;
    height?: InputMaybe<Project_FeaturedImage_Height_Operator>;
    id?: InputMaybe<Project_FeaturedImage_Id_Operator>;
    mimeType?: InputMaybe<Project_FeaturedImage_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Project_FeaturedImage_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Project_FeaturedImage_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Project_FeaturedImage_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Project_FeaturedImage_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Project_FeaturedImage_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Project_FeaturedImage_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Project_FeaturedImage_UpdatedAt_Operator>;
    url?: InputMaybe<Project_FeaturedImage_Url_Operator>;
    width?: InputMaybe<Project_FeaturedImage_Width_Operator>;
};

export type Project_FeaturedImage_Width_Operator = {
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
    cta?: Maybe<Array<Cta>>;
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

export type Project_Intro_Image_Base64_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
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
    base64?: InputMaybe<Project_Intro_Image_Base64_Operator>;
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
    base64?: InputMaybe<Project_Intro_Image_Base64_Operator>;
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
    base64?: InputMaybe<Project_Intro_Image_Base64_Operator>;
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

export type Project_Meta = {
    __typename?: 'Project_Meta';
    description?: Maybe<Scalars['String']['output']>;
    image?: Maybe<Image>;
    noIndex?: Maybe<Scalars['Boolean']['output']>;
    title?: Maybe<Scalars['String']['output']>;
};

export type Project_MetaImageArgs = {
    where?: InputMaybe<Project_Meta_Image_Where>;
};

export type Project_Meta_Image_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_Meta_Image_Base64_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_Meta_Image_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Project_Meta_Image_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_Meta_Image_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Project_Meta_Image_Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Project_Meta_Image_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_Meta_Image_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_Meta_Image_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_Meta_Image_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Project_Meta_Image_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Project_Meta_Image_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_Meta_Image_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_Meta_Image_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Project_Meta_Image_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Project_Meta_Image_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_Meta_Image_Where = {
    AND?: InputMaybe<Array<InputMaybe<Project_Meta_Image_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<Project_Meta_Image_Where_Or>>>;
    alt?: InputMaybe<Project_Meta_Image_Alt_Operator>;
    base64?: InputMaybe<Project_Meta_Image_Base64_Operator>;
    createdAt?: InputMaybe<Project_Meta_Image_CreatedAt_Operator>;
    filename?: InputMaybe<Project_Meta_Image_Filename_Operator>;
    filesize?: InputMaybe<Project_Meta_Image_Filesize_Operator>;
    height?: InputMaybe<Project_Meta_Image_Height_Operator>;
    id?: InputMaybe<Project_Meta_Image_Id_Operator>;
    mimeType?: InputMaybe<Project_Meta_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Project_Meta_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Project_Meta_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Project_Meta_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Project_Meta_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Project_Meta_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Project_Meta_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Project_Meta_Image_UpdatedAt_Operator>;
    url?: InputMaybe<Project_Meta_Image_Url_Operator>;
    width?: InputMaybe<Project_Meta_Image_Width_Operator>;
};

export type Project_Meta_Image_Where_And = {
    alt?: InputMaybe<Project_Meta_Image_Alt_Operator>;
    base64?: InputMaybe<Project_Meta_Image_Base64_Operator>;
    createdAt?: InputMaybe<Project_Meta_Image_CreatedAt_Operator>;
    filename?: InputMaybe<Project_Meta_Image_Filename_Operator>;
    filesize?: InputMaybe<Project_Meta_Image_Filesize_Operator>;
    height?: InputMaybe<Project_Meta_Image_Height_Operator>;
    id?: InputMaybe<Project_Meta_Image_Id_Operator>;
    mimeType?: InputMaybe<Project_Meta_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Project_Meta_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Project_Meta_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Project_Meta_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Project_Meta_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Project_Meta_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Project_Meta_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Project_Meta_Image_UpdatedAt_Operator>;
    url?: InputMaybe<Project_Meta_Image_Url_Operator>;
    width?: InputMaybe<Project_Meta_Image_Width_Operator>;
};

export type Project_Meta_Image_Where_Or = {
    alt?: InputMaybe<Project_Meta_Image_Alt_Operator>;
    base64?: InputMaybe<Project_Meta_Image_Base64_Operator>;
    createdAt?: InputMaybe<Project_Meta_Image_CreatedAt_Operator>;
    filename?: InputMaybe<Project_Meta_Image_Filename_Operator>;
    filesize?: InputMaybe<Project_Meta_Image_Filesize_Operator>;
    height?: InputMaybe<Project_Meta_Image_Height_Operator>;
    id?: InputMaybe<Project_Meta_Image_Id_Operator>;
    mimeType?: InputMaybe<Project_Meta_Image_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Project_Meta_Image_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Project_Meta_Image_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Project_Meta_Image_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Project_Meta_Image_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Project_Meta_Image_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Project_Meta_Image_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Project_Meta_Image_UpdatedAt_Operator>;
    url?: InputMaybe<Project_Meta_Image_Url_Operator>;
    width?: InputMaybe<Project_Meta_Image_Width_Operator>;
};

export type Project_Meta_Image_Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Project_ProjectSections = ImageBlock | TextBlock;

export type Project_CaseStudies_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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

export type Project_Excerpt_Operator = {
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Project_FeaturedImage_Operator = {
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
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

export type Project_Intro__Cta_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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

export type Project_Meta__Description_Operator = {
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Project_Meta__Image_Operator = {
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Project_Meta__NoIndex_Operator = {
    equals?: InputMaybe<Scalars['Boolean']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Project_Meta__Title_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_Slug_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_Title_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
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
    caseStudies?: InputMaybe<Project_CaseStudies_Operator>;
    createdAt?: InputMaybe<Project_CreatedAt_Operator>;
    excerpt?: InputMaybe<Project_Excerpt_Operator>;
    featuredImage?: InputMaybe<Project_FeaturedImage_Operator>;
    id?: InputMaybe<Project_Id_Operator>;
    intro__cta?: InputMaybe<Project_Intro__Cta_Operator>;
    intro__description?: InputMaybe<Project_Intro__Description_Operator>;
    intro__image?: InputMaybe<Project_Intro__Image_Operator>;
    meta__description?: InputMaybe<Project_Meta__Description_Operator>;
    meta__image?: InputMaybe<Project_Meta__Image_Operator>;
    meta__noIndex?: InputMaybe<Project_Meta__NoIndex_Operator>;
    meta__title?: InputMaybe<Project_Meta__Title_Operator>;
    slug?: InputMaybe<Project_Slug_Operator>;
    title?: InputMaybe<Project_Title_Operator>;
    updatedAt?: InputMaybe<Project_UpdatedAt_Operator>;
};

export type Project_Where_And = {
    caseStudies?: InputMaybe<Project_CaseStudies_Operator>;
    createdAt?: InputMaybe<Project_CreatedAt_Operator>;
    excerpt?: InputMaybe<Project_Excerpt_Operator>;
    featuredImage?: InputMaybe<Project_FeaturedImage_Operator>;
    id?: InputMaybe<Project_Id_Operator>;
    intro__cta?: InputMaybe<Project_Intro__Cta_Operator>;
    intro__description?: InputMaybe<Project_Intro__Description_Operator>;
    intro__image?: InputMaybe<Project_Intro__Image_Operator>;
    meta__description?: InputMaybe<Project_Meta__Description_Operator>;
    meta__image?: InputMaybe<Project_Meta__Image_Operator>;
    meta__noIndex?: InputMaybe<Project_Meta__NoIndex_Operator>;
    meta__title?: InputMaybe<Project_Meta__Title_Operator>;
    slug?: InputMaybe<Project_Slug_Operator>;
    title?: InputMaybe<Project_Title_Operator>;
    updatedAt?: InputMaybe<Project_UpdatedAt_Operator>;
};

export type Project_Where_Or = {
    caseStudies?: InputMaybe<Project_CaseStudies_Operator>;
    createdAt?: InputMaybe<Project_CreatedAt_Operator>;
    excerpt?: InputMaybe<Project_Excerpt_Operator>;
    featuredImage?: InputMaybe<Project_FeaturedImage_Operator>;
    id?: InputMaybe<Project_Id_Operator>;
    intro__cta?: InputMaybe<Project_Intro__Cta_Operator>;
    intro__description?: InputMaybe<Project_Intro__Description_Operator>;
    intro__image?: InputMaybe<Project_Intro__Image_Operator>;
    meta__description?: InputMaybe<Project_Meta__Description_Operator>;
    meta__image?: InputMaybe<Project_Meta__Image_Operator>;
    meta__noIndex?: InputMaybe<Project_Meta__NoIndex_Operator>;
    meta__title?: InputMaybe<Project_Meta__Title_Operator>;
    slug?: InputMaybe<Project_Slug_Operator>;
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
    caseStudies?: Maybe<ProjectsDocAccessFields_CaseStudies>;
    createdAt?: Maybe<ProjectsDocAccessFields_CreatedAt>;
    excerpt?: Maybe<ProjectsDocAccessFields_Excerpt>;
    featuredImage?: Maybe<ProjectsDocAccessFields_FeaturedImage>;
    intro?: Maybe<ProjectsDocAccessFields_Intro>;
    meta?: Maybe<ProjectsDocAccessFields_Meta>;
    projectSections?: Maybe<ProjectsDocAccessFields_ProjectSections>;
    slug?: Maybe<ProjectsDocAccessFields_Slug>;
    title?: Maybe<ProjectsDocAccessFields_Title>;
    updatedAt?: Maybe<ProjectsDocAccessFields_UpdatedAt>;
};

export type ProjectsDocAccessFields_CaseStudies = {
    __typename?: 'ProjectsDocAccessFields_caseStudies';
    create?: Maybe<ProjectsDocAccessFields_CaseStudies_Create>;
    delete?: Maybe<ProjectsDocAccessFields_CaseStudies_Delete>;
    read?: Maybe<ProjectsDocAccessFields_CaseStudies_Read>;
    update?: Maybe<ProjectsDocAccessFields_CaseStudies_Update>;
};

export type ProjectsDocAccessFields_CaseStudies_Create = {
    __typename?: 'ProjectsDocAccessFields_caseStudies_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_CaseStudies_Delete = {
    __typename?: 'ProjectsDocAccessFields_caseStudies_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_CaseStudies_Read = {
    __typename?: 'ProjectsDocAccessFields_caseStudies_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_CaseStudies_Update = {
    __typename?: 'ProjectsDocAccessFields_caseStudies_Update';
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

export type ProjectsDocAccessFields_Excerpt = {
    __typename?: 'ProjectsDocAccessFields_excerpt';
    create?: Maybe<ProjectsDocAccessFields_Excerpt_Create>;
    delete?: Maybe<ProjectsDocAccessFields_Excerpt_Delete>;
    read?: Maybe<ProjectsDocAccessFields_Excerpt_Read>;
    update?: Maybe<ProjectsDocAccessFields_Excerpt_Update>;
};

export type ProjectsDocAccessFields_Excerpt_Create = {
    __typename?: 'ProjectsDocAccessFields_excerpt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Excerpt_Delete = {
    __typename?: 'ProjectsDocAccessFields_excerpt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Excerpt_Read = {
    __typename?: 'ProjectsDocAccessFields_excerpt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Excerpt_Update = {
    __typename?: 'ProjectsDocAccessFields_excerpt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_FeaturedImage = {
    __typename?: 'ProjectsDocAccessFields_featuredImage';
    create?: Maybe<ProjectsDocAccessFields_FeaturedImage_Create>;
    delete?: Maybe<ProjectsDocAccessFields_FeaturedImage_Delete>;
    read?: Maybe<ProjectsDocAccessFields_FeaturedImage_Read>;
    update?: Maybe<ProjectsDocAccessFields_FeaturedImage_Update>;
};

export type ProjectsDocAccessFields_FeaturedImage_Create = {
    __typename?: 'ProjectsDocAccessFields_featuredImage_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_FeaturedImage_Delete = {
    __typename?: 'ProjectsDocAccessFields_featuredImage_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_FeaturedImage_Read = {
    __typename?: 'ProjectsDocAccessFields_featuredImage_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_FeaturedImage_Update = {
    __typename?: 'ProjectsDocAccessFields_featuredImage_Update';
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
    cta?: Maybe<ProjectsDocAccessFields_Intro_Cta>;
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

export type ProjectsDocAccessFields_Intro_Cta = {
    __typename?: 'ProjectsDocAccessFields_intro_cta';
    create?: Maybe<ProjectsDocAccessFields_Intro_Cta_Create>;
    delete?: Maybe<ProjectsDocAccessFields_Intro_Cta_Delete>;
    read?: Maybe<ProjectsDocAccessFields_Intro_Cta_Read>;
    update?: Maybe<ProjectsDocAccessFields_Intro_Cta_Update>;
};

export type ProjectsDocAccessFields_Intro_Cta_Create = {
    __typename?: 'ProjectsDocAccessFields_intro_cta_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Intro_Cta_Delete = {
    __typename?: 'ProjectsDocAccessFields_intro_cta_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Intro_Cta_Read = {
    __typename?: 'ProjectsDocAccessFields_intro_cta_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Intro_Cta_Update = {
    __typename?: 'ProjectsDocAccessFields_intro_cta_Update';
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

export type ProjectsDocAccessFields_Meta = {
    __typename?: 'ProjectsDocAccessFields_meta';
    create?: Maybe<ProjectsDocAccessFields_Meta_Create>;
    delete?: Maybe<ProjectsDocAccessFields_Meta_Delete>;
    fields?: Maybe<ProjectsDocAccessFields_Meta_Fields>;
    read?: Maybe<ProjectsDocAccessFields_Meta_Read>;
    update?: Maybe<ProjectsDocAccessFields_Meta_Update>;
};

export type ProjectsDocAccessFields_Meta_Create = {
    __typename?: 'ProjectsDocAccessFields_meta_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Meta_Delete = {
    __typename?: 'ProjectsDocAccessFields_meta_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Meta_Fields = {
    __typename?: 'ProjectsDocAccessFields_meta_Fields';
    description?: Maybe<ProjectsDocAccessFields_Meta_Description>;
    image?: Maybe<ProjectsDocAccessFields_Meta_Image>;
    noIndex?: Maybe<ProjectsDocAccessFields_Meta_NoIndex>;
    overview?: Maybe<ProjectsDocAccessFields_Meta_Overview>;
    preview?: Maybe<ProjectsDocAccessFields_Meta_Preview>;
    title?: Maybe<ProjectsDocAccessFields_Meta_Title>;
};

export type ProjectsDocAccessFields_Meta_Read = {
    __typename?: 'ProjectsDocAccessFields_meta_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Meta_Update = {
    __typename?: 'ProjectsDocAccessFields_meta_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Meta_Description = {
    __typename?: 'ProjectsDocAccessFields_meta_description';
    create?: Maybe<ProjectsDocAccessFields_Meta_Description_Create>;
    delete?: Maybe<ProjectsDocAccessFields_Meta_Description_Delete>;
    read?: Maybe<ProjectsDocAccessFields_Meta_Description_Read>;
    update?: Maybe<ProjectsDocAccessFields_Meta_Description_Update>;
};

export type ProjectsDocAccessFields_Meta_Description_Create = {
    __typename?: 'ProjectsDocAccessFields_meta_description_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Meta_Description_Delete = {
    __typename?: 'ProjectsDocAccessFields_meta_description_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Meta_Description_Read = {
    __typename?: 'ProjectsDocAccessFields_meta_description_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Meta_Description_Update = {
    __typename?: 'ProjectsDocAccessFields_meta_description_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Meta_Image = {
    __typename?: 'ProjectsDocAccessFields_meta_image';
    create?: Maybe<ProjectsDocAccessFields_Meta_Image_Create>;
    delete?: Maybe<ProjectsDocAccessFields_Meta_Image_Delete>;
    read?: Maybe<ProjectsDocAccessFields_Meta_Image_Read>;
    update?: Maybe<ProjectsDocAccessFields_Meta_Image_Update>;
};

export type ProjectsDocAccessFields_Meta_Image_Create = {
    __typename?: 'ProjectsDocAccessFields_meta_image_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Meta_Image_Delete = {
    __typename?: 'ProjectsDocAccessFields_meta_image_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Meta_Image_Read = {
    __typename?: 'ProjectsDocAccessFields_meta_image_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Meta_Image_Update = {
    __typename?: 'ProjectsDocAccessFields_meta_image_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Meta_NoIndex = {
    __typename?: 'ProjectsDocAccessFields_meta_noIndex';
    create?: Maybe<ProjectsDocAccessFields_Meta_NoIndex_Create>;
    delete?: Maybe<ProjectsDocAccessFields_Meta_NoIndex_Delete>;
    read?: Maybe<ProjectsDocAccessFields_Meta_NoIndex_Read>;
    update?: Maybe<ProjectsDocAccessFields_Meta_NoIndex_Update>;
};

export type ProjectsDocAccessFields_Meta_NoIndex_Create = {
    __typename?: 'ProjectsDocAccessFields_meta_noIndex_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Meta_NoIndex_Delete = {
    __typename?: 'ProjectsDocAccessFields_meta_noIndex_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Meta_NoIndex_Read = {
    __typename?: 'ProjectsDocAccessFields_meta_noIndex_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Meta_NoIndex_Update = {
    __typename?: 'ProjectsDocAccessFields_meta_noIndex_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Meta_Overview = {
    __typename?: 'ProjectsDocAccessFields_meta_overview';
    create?: Maybe<ProjectsDocAccessFields_Meta_Overview_Create>;
    delete?: Maybe<ProjectsDocAccessFields_Meta_Overview_Delete>;
    read?: Maybe<ProjectsDocAccessFields_Meta_Overview_Read>;
    update?: Maybe<ProjectsDocAccessFields_Meta_Overview_Update>;
};

export type ProjectsDocAccessFields_Meta_Overview_Create = {
    __typename?: 'ProjectsDocAccessFields_meta_overview_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Meta_Overview_Delete = {
    __typename?: 'ProjectsDocAccessFields_meta_overview_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Meta_Overview_Read = {
    __typename?: 'ProjectsDocAccessFields_meta_overview_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Meta_Overview_Update = {
    __typename?: 'ProjectsDocAccessFields_meta_overview_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Meta_Preview = {
    __typename?: 'ProjectsDocAccessFields_meta_preview';
    create?: Maybe<ProjectsDocAccessFields_Meta_Preview_Create>;
    delete?: Maybe<ProjectsDocAccessFields_Meta_Preview_Delete>;
    read?: Maybe<ProjectsDocAccessFields_Meta_Preview_Read>;
    update?: Maybe<ProjectsDocAccessFields_Meta_Preview_Update>;
};

export type ProjectsDocAccessFields_Meta_Preview_Create = {
    __typename?: 'ProjectsDocAccessFields_meta_preview_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Meta_Preview_Delete = {
    __typename?: 'ProjectsDocAccessFields_meta_preview_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Meta_Preview_Read = {
    __typename?: 'ProjectsDocAccessFields_meta_preview_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Meta_Preview_Update = {
    __typename?: 'ProjectsDocAccessFields_meta_preview_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Meta_Title = {
    __typename?: 'ProjectsDocAccessFields_meta_title';
    create?: Maybe<ProjectsDocAccessFields_Meta_Title_Create>;
    delete?: Maybe<ProjectsDocAccessFields_Meta_Title_Delete>;
    read?: Maybe<ProjectsDocAccessFields_Meta_Title_Read>;
    update?: Maybe<ProjectsDocAccessFields_Meta_Title_Update>;
};

export type ProjectsDocAccessFields_Meta_Title_Create = {
    __typename?: 'ProjectsDocAccessFields_meta_title_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Meta_Title_Delete = {
    __typename?: 'ProjectsDocAccessFields_meta_title_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Meta_Title_Read = {
    __typename?: 'ProjectsDocAccessFields_meta_title_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Meta_Title_Update = {
    __typename?: 'ProjectsDocAccessFields_meta_title_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_ProjectSections = {
    __typename?: 'ProjectsDocAccessFields_projectSections';
    create?: Maybe<ProjectsDocAccessFields_ProjectSections_Create>;
    delete?: Maybe<ProjectsDocAccessFields_ProjectSections_Delete>;
    read?: Maybe<ProjectsDocAccessFields_ProjectSections_Read>;
    update?: Maybe<ProjectsDocAccessFields_ProjectSections_Update>;
};

export type ProjectsDocAccessFields_ProjectSections_Create = {
    __typename?: 'ProjectsDocAccessFields_projectSections_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_ProjectSections_Delete = {
    __typename?: 'ProjectsDocAccessFields_projectSections_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_ProjectSections_Read = {
    __typename?: 'ProjectsDocAccessFields_projectSections_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_ProjectSections_Update = {
    __typename?: 'ProjectsDocAccessFields_projectSections_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Slug = {
    __typename?: 'ProjectsDocAccessFields_slug';
    create?: Maybe<ProjectsDocAccessFields_Slug_Create>;
    delete?: Maybe<ProjectsDocAccessFields_Slug_Delete>;
    read?: Maybe<ProjectsDocAccessFields_Slug_Read>;
    update?: Maybe<ProjectsDocAccessFields_Slug_Update>;
};

export type ProjectsDocAccessFields_Slug_Create = {
    __typename?: 'ProjectsDocAccessFields_slug_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Slug_Delete = {
    __typename?: 'ProjectsDocAccessFields_slug_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Slug_Read = {
    __typename?: 'ProjectsDocAccessFields_slug_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsDocAccessFields_Slug_Update = {
    __typename?: 'ProjectsDocAccessFields_slug_Update';
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
    caseStudies?: Maybe<ProjectsFields_CaseStudies>;
    createdAt?: Maybe<ProjectsFields_CreatedAt>;
    excerpt?: Maybe<ProjectsFields_Excerpt>;
    featuredImage?: Maybe<ProjectsFields_FeaturedImage>;
    intro?: Maybe<ProjectsFields_Intro>;
    meta?: Maybe<ProjectsFields_Meta>;
    projectSections?: Maybe<ProjectsFields_ProjectSections>;
    slug?: Maybe<ProjectsFields_Slug>;
    title?: Maybe<ProjectsFields_Title>;
    updatedAt?: Maybe<ProjectsFields_UpdatedAt>;
};

export type ProjectsFields_CaseStudies = {
    __typename?: 'ProjectsFields_caseStudies';
    create?: Maybe<ProjectsFields_CaseStudies_Create>;
    delete?: Maybe<ProjectsFields_CaseStudies_Delete>;
    read?: Maybe<ProjectsFields_CaseStudies_Read>;
    update?: Maybe<ProjectsFields_CaseStudies_Update>;
};

export type ProjectsFields_CaseStudies_Create = {
    __typename?: 'ProjectsFields_caseStudies_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_CaseStudies_Delete = {
    __typename?: 'ProjectsFields_caseStudies_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_CaseStudies_Read = {
    __typename?: 'ProjectsFields_caseStudies_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_CaseStudies_Update = {
    __typename?: 'ProjectsFields_caseStudies_Update';
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

export type ProjectsFields_Excerpt = {
    __typename?: 'ProjectsFields_excerpt';
    create?: Maybe<ProjectsFields_Excerpt_Create>;
    delete?: Maybe<ProjectsFields_Excerpt_Delete>;
    read?: Maybe<ProjectsFields_Excerpt_Read>;
    update?: Maybe<ProjectsFields_Excerpt_Update>;
};

export type ProjectsFields_Excerpt_Create = {
    __typename?: 'ProjectsFields_excerpt_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Excerpt_Delete = {
    __typename?: 'ProjectsFields_excerpt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Excerpt_Read = {
    __typename?: 'ProjectsFields_excerpt_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Excerpt_Update = {
    __typename?: 'ProjectsFields_excerpt_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_FeaturedImage = {
    __typename?: 'ProjectsFields_featuredImage';
    create?: Maybe<ProjectsFields_FeaturedImage_Create>;
    delete?: Maybe<ProjectsFields_FeaturedImage_Delete>;
    read?: Maybe<ProjectsFields_FeaturedImage_Read>;
    update?: Maybe<ProjectsFields_FeaturedImage_Update>;
};

export type ProjectsFields_FeaturedImage_Create = {
    __typename?: 'ProjectsFields_featuredImage_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_FeaturedImage_Delete = {
    __typename?: 'ProjectsFields_featuredImage_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_FeaturedImage_Read = {
    __typename?: 'ProjectsFields_featuredImage_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_FeaturedImage_Update = {
    __typename?: 'ProjectsFields_featuredImage_Update';
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
    cta?: Maybe<ProjectsFields_Intro_Cta>;
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

export type ProjectsFields_Intro_Cta = {
    __typename?: 'ProjectsFields_intro_cta';
    create?: Maybe<ProjectsFields_Intro_Cta_Create>;
    delete?: Maybe<ProjectsFields_Intro_Cta_Delete>;
    read?: Maybe<ProjectsFields_Intro_Cta_Read>;
    update?: Maybe<ProjectsFields_Intro_Cta_Update>;
};

export type ProjectsFields_Intro_Cta_Create = {
    __typename?: 'ProjectsFields_intro_cta_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Intro_Cta_Delete = {
    __typename?: 'ProjectsFields_intro_cta_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Intro_Cta_Read = {
    __typename?: 'ProjectsFields_intro_cta_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Intro_Cta_Update = {
    __typename?: 'ProjectsFields_intro_cta_Update';
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

export type ProjectsFields_Meta = {
    __typename?: 'ProjectsFields_meta';
    create?: Maybe<ProjectsFields_Meta_Create>;
    delete?: Maybe<ProjectsFields_Meta_Delete>;
    fields?: Maybe<ProjectsFields_Meta_Fields>;
    read?: Maybe<ProjectsFields_Meta_Read>;
    update?: Maybe<ProjectsFields_Meta_Update>;
};

export type ProjectsFields_Meta_Create = {
    __typename?: 'ProjectsFields_meta_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Meta_Delete = {
    __typename?: 'ProjectsFields_meta_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Meta_Fields = {
    __typename?: 'ProjectsFields_meta_Fields';
    description?: Maybe<ProjectsFields_Meta_Description>;
    image?: Maybe<ProjectsFields_Meta_Image>;
    noIndex?: Maybe<ProjectsFields_Meta_NoIndex>;
    overview?: Maybe<ProjectsFields_Meta_Overview>;
    preview?: Maybe<ProjectsFields_Meta_Preview>;
    title?: Maybe<ProjectsFields_Meta_Title>;
};

export type ProjectsFields_Meta_Read = {
    __typename?: 'ProjectsFields_meta_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Meta_Update = {
    __typename?: 'ProjectsFields_meta_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Meta_Description = {
    __typename?: 'ProjectsFields_meta_description';
    create?: Maybe<ProjectsFields_Meta_Description_Create>;
    delete?: Maybe<ProjectsFields_Meta_Description_Delete>;
    read?: Maybe<ProjectsFields_Meta_Description_Read>;
    update?: Maybe<ProjectsFields_Meta_Description_Update>;
};

export type ProjectsFields_Meta_Description_Create = {
    __typename?: 'ProjectsFields_meta_description_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Meta_Description_Delete = {
    __typename?: 'ProjectsFields_meta_description_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Meta_Description_Read = {
    __typename?: 'ProjectsFields_meta_description_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Meta_Description_Update = {
    __typename?: 'ProjectsFields_meta_description_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Meta_Image = {
    __typename?: 'ProjectsFields_meta_image';
    create?: Maybe<ProjectsFields_Meta_Image_Create>;
    delete?: Maybe<ProjectsFields_Meta_Image_Delete>;
    read?: Maybe<ProjectsFields_Meta_Image_Read>;
    update?: Maybe<ProjectsFields_Meta_Image_Update>;
};

export type ProjectsFields_Meta_Image_Create = {
    __typename?: 'ProjectsFields_meta_image_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Meta_Image_Delete = {
    __typename?: 'ProjectsFields_meta_image_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Meta_Image_Read = {
    __typename?: 'ProjectsFields_meta_image_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Meta_Image_Update = {
    __typename?: 'ProjectsFields_meta_image_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Meta_NoIndex = {
    __typename?: 'ProjectsFields_meta_noIndex';
    create?: Maybe<ProjectsFields_Meta_NoIndex_Create>;
    delete?: Maybe<ProjectsFields_Meta_NoIndex_Delete>;
    read?: Maybe<ProjectsFields_Meta_NoIndex_Read>;
    update?: Maybe<ProjectsFields_Meta_NoIndex_Update>;
};

export type ProjectsFields_Meta_NoIndex_Create = {
    __typename?: 'ProjectsFields_meta_noIndex_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Meta_NoIndex_Delete = {
    __typename?: 'ProjectsFields_meta_noIndex_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Meta_NoIndex_Read = {
    __typename?: 'ProjectsFields_meta_noIndex_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Meta_NoIndex_Update = {
    __typename?: 'ProjectsFields_meta_noIndex_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Meta_Overview = {
    __typename?: 'ProjectsFields_meta_overview';
    create?: Maybe<ProjectsFields_Meta_Overview_Create>;
    delete?: Maybe<ProjectsFields_Meta_Overview_Delete>;
    read?: Maybe<ProjectsFields_Meta_Overview_Read>;
    update?: Maybe<ProjectsFields_Meta_Overview_Update>;
};

export type ProjectsFields_Meta_Overview_Create = {
    __typename?: 'ProjectsFields_meta_overview_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Meta_Overview_Delete = {
    __typename?: 'ProjectsFields_meta_overview_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Meta_Overview_Read = {
    __typename?: 'ProjectsFields_meta_overview_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Meta_Overview_Update = {
    __typename?: 'ProjectsFields_meta_overview_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Meta_Preview = {
    __typename?: 'ProjectsFields_meta_preview';
    create?: Maybe<ProjectsFields_Meta_Preview_Create>;
    delete?: Maybe<ProjectsFields_Meta_Preview_Delete>;
    read?: Maybe<ProjectsFields_Meta_Preview_Read>;
    update?: Maybe<ProjectsFields_Meta_Preview_Update>;
};

export type ProjectsFields_Meta_Preview_Create = {
    __typename?: 'ProjectsFields_meta_preview_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Meta_Preview_Delete = {
    __typename?: 'ProjectsFields_meta_preview_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Meta_Preview_Read = {
    __typename?: 'ProjectsFields_meta_preview_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Meta_Preview_Update = {
    __typename?: 'ProjectsFields_meta_preview_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Meta_Title = {
    __typename?: 'ProjectsFields_meta_title';
    create?: Maybe<ProjectsFields_Meta_Title_Create>;
    delete?: Maybe<ProjectsFields_Meta_Title_Delete>;
    read?: Maybe<ProjectsFields_Meta_Title_Read>;
    update?: Maybe<ProjectsFields_Meta_Title_Update>;
};

export type ProjectsFields_Meta_Title_Create = {
    __typename?: 'ProjectsFields_meta_title_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Meta_Title_Delete = {
    __typename?: 'ProjectsFields_meta_title_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Meta_Title_Read = {
    __typename?: 'ProjectsFields_meta_title_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Meta_Title_Update = {
    __typename?: 'ProjectsFields_meta_title_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_ProjectSections = {
    __typename?: 'ProjectsFields_projectSections';
    create?: Maybe<ProjectsFields_ProjectSections_Create>;
    delete?: Maybe<ProjectsFields_ProjectSections_Delete>;
    read?: Maybe<ProjectsFields_ProjectSections_Read>;
    update?: Maybe<ProjectsFields_ProjectSections_Update>;
};

export type ProjectsFields_ProjectSections_Create = {
    __typename?: 'ProjectsFields_projectSections_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_ProjectSections_Delete = {
    __typename?: 'ProjectsFields_projectSections_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_ProjectSections_Read = {
    __typename?: 'ProjectsFields_projectSections_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_ProjectSections_Update = {
    __typename?: 'ProjectsFields_projectSections_Update';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Slug = {
    __typename?: 'ProjectsFields_slug';
    create?: Maybe<ProjectsFields_Slug_Create>;
    delete?: Maybe<ProjectsFields_Slug_Delete>;
    read?: Maybe<ProjectsFields_Slug_Read>;
    update?: Maybe<ProjectsFields_Slug_Update>;
};

export type ProjectsFields_Slug_Create = {
    __typename?: 'ProjectsFields_slug_Create';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Slug_Delete = {
    __typename?: 'ProjectsFields_slug_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Slug_Read = {
    __typename?: 'ProjectsFields_slug_Read';
    permission: Scalars['Boolean']['output'];
};

export type ProjectsFields_Slug_Update = {
    __typename?: 'ProjectsFields_slug_Update';
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
    About?: Maybe<About>;
    Access?: Maybe<Access>;
    CaseStudies?: Maybe<CaseStudies>;
    CaseStudy?: Maybe<CaseStudy>;
    CaseStudyListing?: Maybe<CaseStudyListing>;
    Cta?: Maybe<Cta>;
    Ctas?: Maybe<Ctas>;
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
    Social?: Maybe<Social>;
    Socials?: Maybe<Socials>;
    Testimonial?: Maybe<Testimonial>;
    TestimonialListing?: Maybe<TestimonialListing>;
    Testimonials?: Maybe<Testimonials>;
    Tool?: Maybe<Tool>;
    ToolboxListing?: Maybe<ToolboxListing>;
    Tools?: Maybe<Tools>;
    User?: Maybe<User>;
    Users?: Maybe<Users>;
    docAccessAbout?: Maybe<AboutDocAccess>;
    docAccessCaseStudy?: Maybe<Case_StudiesDocAccess>;
    docAccessCaseStudyListing?: Maybe<Case_Study_ListingDocAccess>;
    docAccessCta?: Maybe<CtasDocAccess>;
    docAccessHero?: Maybe<HeroesDocAccess>;
    docAccessIcon?: Maybe<IconsDocAccess>;
    docAccessImage?: Maybe<ImagesDocAccess>;
    docAccessNav?: Maybe<NavDocAccess>;
    docAccessPage?: Maybe<PagesDocAccess>;
    docAccessProject?: Maybe<ProjectsDocAccess>;
    docAccessSocial?: Maybe<SocialsDocAccess>;
    docAccessTestimonial?: Maybe<TestimonialsDocAccess>;
    docAccessTestimonialListing?: Maybe<Testimonial_ListingDocAccess>;
    docAccessTool?: Maybe<ToolsDocAccess>;
    docAccessToolboxListing?: Maybe<Toolbox_ListingDocAccess>;
    docAccessUser?: Maybe<UsersDocAccess>;
    initializedUser?: Maybe<Scalars['Boolean']['output']>;
    meUser?: Maybe<UsersMe>;
};

export type QueryAboutArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryCaseStudiesArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Scalars['String']['input']>;
    where?: InputMaybe<CaseStudy_Where>;
};

export type QueryCaseStudyArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type QueryCaseStudyListingArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type QueryCtaArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type QueryCtasArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Scalars['String']['input']>;
    where?: InputMaybe<Cta_Where>;
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

export type QuerySocialArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    id: Scalars['String']['input'];
};

export type QuerySocialsArgs = {
    draft?: InputMaybe<Scalars['Boolean']['input']>;
    limit?: InputMaybe<Scalars['Int']['input']>;
    page?: InputMaybe<Scalars['Int']['input']>;
    sort?: InputMaybe<Scalars['String']['input']>;
    where?: InputMaybe<Social_Where>;
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

export type QueryDocAccessCaseStudyArgs = {
    id: Scalars['String']['input'];
};

export type QueryDocAccessCtaArgs = {
    id: Scalars['String']['input'];
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

export type QueryDocAccessSocialArgs = {
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

export type SingleUseBlock = {
    __typename?: 'SingleUseBlock';
    blockName?: Maybe<Scalars['String']['output']>;
    blockType?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    sectionId?: Maybe<Scalars['String']['output']>;
    singleUse?: Maybe<SingleUseBlock_SingleUse>;
};

export type SingleUseBlock_SingleUse =
    | 'about'
    | 'case_study_listing'
    | 'testimonial_listing'
    | 'toolbox_listing'
    | '%future added value';

export type Social = {
    __typename?: 'Social';
    createdAt?: Maybe<Scalars['DateTime']['output']>;
    icon: Icon;
    id?: Maybe<Scalars['String']['output']>;
    label: Scalars['String']['output'];
    socialLink?: Maybe<Scalars['String']['output']>;
    updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SocialIconArgs = {
    where?: InputMaybe<Social_Icon_Where>;
};

export type Social_Icon_Alt_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Social_Icon_Base64_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Social_Icon_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Social_Icon_Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Social_Icon_Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Social_Icon_Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Social_Icon_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Social_Icon_MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Social_Icon_Sizes__Thumbnail__Filename_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Social_Icon_Sizes__Thumbnail__Filesize_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Social_Icon_Sizes__Thumbnail__Height_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Social_Icon_Sizes__Thumbnail__MimeType_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Social_Icon_Sizes__Thumbnail__Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Social_Icon_Sizes__Thumbnail__Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Social_Icon_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Social_Icon_Url_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Social_Icon_Where = {
    AND?: InputMaybe<Array<InputMaybe<Social_Icon_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<Social_Icon_Where_Or>>>;
    alt?: InputMaybe<Social_Icon_Alt_Operator>;
    base64?: InputMaybe<Social_Icon_Base64_Operator>;
    createdAt?: InputMaybe<Social_Icon_CreatedAt_Operator>;
    filename?: InputMaybe<Social_Icon_Filename_Operator>;
    filesize?: InputMaybe<Social_Icon_Filesize_Operator>;
    height?: InputMaybe<Social_Icon_Height_Operator>;
    id?: InputMaybe<Social_Icon_Id_Operator>;
    mimeType?: InputMaybe<Social_Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Social_Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Social_Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Social_Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Social_Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Social_Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Social_Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Social_Icon_UpdatedAt_Operator>;
    url?: InputMaybe<Social_Icon_Url_Operator>;
    width?: InputMaybe<Social_Icon_Width_Operator>;
};

export type Social_Icon_Where_And = {
    alt?: InputMaybe<Social_Icon_Alt_Operator>;
    base64?: InputMaybe<Social_Icon_Base64_Operator>;
    createdAt?: InputMaybe<Social_Icon_CreatedAt_Operator>;
    filename?: InputMaybe<Social_Icon_Filename_Operator>;
    filesize?: InputMaybe<Social_Icon_Filesize_Operator>;
    height?: InputMaybe<Social_Icon_Height_Operator>;
    id?: InputMaybe<Social_Icon_Id_Operator>;
    mimeType?: InputMaybe<Social_Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Social_Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Social_Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Social_Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Social_Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Social_Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Social_Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Social_Icon_UpdatedAt_Operator>;
    url?: InputMaybe<Social_Icon_Url_Operator>;
    width?: InputMaybe<Social_Icon_Width_Operator>;
};

export type Social_Icon_Where_Or = {
    alt?: InputMaybe<Social_Icon_Alt_Operator>;
    base64?: InputMaybe<Social_Icon_Base64_Operator>;
    createdAt?: InputMaybe<Social_Icon_CreatedAt_Operator>;
    filename?: InputMaybe<Social_Icon_Filename_Operator>;
    filesize?: InputMaybe<Social_Icon_Filesize_Operator>;
    height?: InputMaybe<Social_Icon_Height_Operator>;
    id?: InputMaybe<Social_Icon_Id_Operator>;
    mimeType?: InputMaybe<Social_Icon_MimeType_Operator>;
    sizes__thumbnail__filename?: InputMaybe<Social_Icon_Sizes__Thumbnail__Filename_Operator>;
    sizes__thumbnail__filesize?: InputMaybe<Social_Icon_Sizes__Thumbnail__Filesize_Operator>;
    sizes__thumbnail__height?: InputMaybe<Social_Icon_Sizes__Thumbnail__Height_Operator>;
    sizes__thumbnail__mimeType?: InputMaybe<Social_Icon_Sizes__Thumbnail__MimeType_Operator>;
    sizes__thumbnail__url?: InputMaybe<Social_Icon_Sizes__Thumbnail__Url_Operator>;
    sizes__thumbnail__width?: InputMaybe<Social_Icon_Sizes__Thumbnail__Width_Operator>;
    updatedAt?: InputMaybe<Social_Icon_UpdatedAt_Operator>;
    url?: InputMaybe<Social_Icon_Url_Operator>;
    width?: InputMaybe<Social_Icon_Width_Operator>;
};

export type Social_Icon_Width_Operator = {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Social_CreatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Social_Icon_Operator = {
    equals?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Social_Id_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Social_Label_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Social_SocialLink_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Social_UpdatedAt_Operator = {
    equals?: InputMaybe<Scalars['DateTime']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['DateTime']['input']>;
    greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    less_than?: InputMaybe<Scalars['DateTime']['input']>;
    less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
    like?: InputMaybe<Scalars['DateTime']['input']>;
    not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Social_Where = {
    AND?: InputMaybe<Array<InputMaybe<Social_Where_And>>>;
    OR?: InputMaybe<Array<InputMaybe<Social_Where_Or>>>;
    createdAt?: InputMaybe<Social_CreatedAt_Operator>;
    icon?: InputMaybe<Social_Icon_Operator>;
    id?: InputMaybe<Social_Id_Operator>;
    label?: InputMaybe<Social_Label_Operator>;
    socialLink?: InputMaybe<Social_SocialLink_Operator>;
    updatedAt?: InputMaybe<Social_UpdatedAt_Operator>;
};

export type Social_Where_And = {
    createdAt?: InputMaybe<Social_CreatedAt_Operator>;
    icon?: InputMaybe<Social_Icon_Operator>;
    id?: InputMaybe<Social_Id_Operator>;
    label?: InputMaybe<Social_Label_Operator>;
    socialLink?: InputMaybe<Social_SocialLink_Operator>;
    updatedAt?: InputMaybe<Social_UpdatedAt_Operator>;
};

export type Social_Where_Or = {
    createdAt?: InputMaybe<Social_CreatedAt_Operator>;
    icon?: InputMaybe<Social_Icon_Operator>;
    id?: InputMaybe<Social_Id_Operator>;
    label?: InputMaybe<Social_Label_Operator>;
    socialLink?: InputMaybe<Social_SocialLink_Operator>;
    updatedAt?: InputMaybe<Social_UpdatedAt_Operator>;
};

export type Socials = {
    __typename?: 'Socials';
    docs?: Maybe<Array<Maybe<Social>>>;
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

export type SocialsBlock = {
    __typename?: 'SocialsBlock';
    blockName?: Maybe<Scalars['String']['output']>;
    blockType?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    sectionId?: Maybe<Scalars['String']['output']>;
    socials?: Maybe<Array<Social>>;
};

export type SocialsCreateAccess = {
    __typename?: 'SocialsCreateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SocialsCreateDocAccess = {
    __typename?: 'SocialsCreateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SocialsDeleteAccess = {
    __typename?: 'SocialsDeleteAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SocialsDeleteDocAccess = {
    __typename?: 'SocialsDeleteDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SocialsDocAccessFields = {
    __typename?: 'SocialsDocAccessFields';
    createdAt?: Maybe<SocialsDocAccessFields_CreatedAt>;
    icon?: Maybe<SocialsDocAccessFields_Icon>;
    label?: Maybe<SocialsDocAccessFields_Label>;
    socialLink?: Maybe<SocialsDocAccessFields_SocialLink>;
    updatedAt?: Maybe<SocialsDocAccessFields_UpdatedAt>;
};

export type SocialsDocAccessFields_CreatedAt = {
    __typename?: 'SocialsDocAccessFields_createdAt';
    create?: Maybe<SocialsDocAccessFields_CreatedAt_Create>;
    delete?: Maybe<SocialsDocAccessFields_CreatedAt_Delete>;
    read?: Maybe<SocialsDocAccessFields_CreatedAt_Read>;
    update?: Maybe<SocialsDocAccessFields_CreatedAt_Update>;
};

export type SocialsDocAccessFields_CreatedAt_Create = {
    __typename?: 'SocialsDocAccessFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type SocialsDocAccessFields_CreatedAt_Delete = {
    __typename?: 'SocialsDocAccessFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type SocialsDocAccessFields_CreatedAt_Read = {
    __typename?: 'SocialsDocAccessFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type SocialsDocAccessFields_CreatedAt_Update = {
    __typename?: 'SocialsDocAccessFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type SocialsDocAccessFields_Icon = {
    __typename?: 'SocialsDocAccessFields_icon';
    create?: Maybe<SocialsDocAccessFields_Icon_Create>;
    delete?: Maybe<SocialsDocAccessFields_Icon_Delete>;
    read?: Maybe<SocialsDocAccessFields_Icon_Read>;
    update?: Maybe<SocialsDocAccessFields_Icon_Update>;
};

export type SocialsDocAccessFields_Icon_Create = {
    __typename?: 'SocialsDocAccessFields_icon_Create';
    permission: Scalars['Boolean']['output'];
};

export type SocialsDocAccessFields_Icon_Delete = {
    __typename?: 'SocialsDocAccessFields_icon_Delete';
    permission: Scalars['Boolean']['output'];
};

export type SocialsDocAccessFields_Icon_Read = {
    __typename?: 'SocialsDocAccessFields_icon_Read';
    permission: Scalars['Boolean']['output'];
};

export type SocialsDocAccessFields_Icon_Update = {
    __typename?: 'SocialsDocAccessFields_icon_Update';
    permission: Scalars['Boolean']['output'];
};

export type SocialsDocAccessFields_Label = {
    __typename?: 'SocialsDocAccessFields_label';
    create?: Maybe<SocialsDocAccessFields_Label_Create>;
    delete?: Maybe<SocialsDocAccessFields_Label_Delete>;
    read?: Maybe<SocialsDocAccessFields_Label_Read>;
    update?: Maybe<SocialsDocAccessFields_Label_Update>;
};

export type SocialsDocAccessFields_Label_Create = {
    __typename?: 'SocialsDocAccessFields_label_Create';
    permission: Scalars['Boolean']['output'];
};

export type SocialsDocAccessFields_Label_Delete = {
    __typename?: 'SocialsDocAccessFields_label_Delete';
    permission: Scalars['Boolean']['output'];
};

export type SocialsDocAccessFields_Label_Read = {
    __typename?: 'SocialsDocAccessFields_label_Read';
    permission: Scalars['Boolean']['output'];
};

export type SocialsDocAccessFields_Label_Update = {
    __typename?: 'SocialsDocAccessFields_label_Update';
    permission: Scalars['Boolean']['output'];
};

export type SocialsDocAccessFields_SocialLink = {
    __typename?: 'SocialsDocAccessFields_socialLink';
    create?: Maybe<SocialsDocAccessFields_SocialLink_Create>;
    delete?: Maybe<SocialsDocAccessFields_SocialLink_Delete>;
    read?: Maybe<SocialsDocAccessFields_SocialLink_Read>;
    update?: Maybe<SocialsDocAccessFields_SocialLink_Update>;
};

export type SocialsDocAccessFields_SocialLink_Create = {
    __typename?: 'SocialsDocAccessFields_socialLink_Create';
    permission: Scalars['Boolean']['output'];
};

export type SocialsDocAccessFields_SocialLink_Delete = {
    __typename?: 'SocialsDocAccessFields_socialLink_Delete';
    permission: Scalars['Boolean']['output'];
};

export type SocialsDocAccessFields_SocialLink_Read = {
    __typename?: 'SocialsDocAccessFields_socialLink_Read';
    permission: Scalars['Boolean']['output'];
};

export type SocialsDocAccessFields_SocialLink_Update = {
    __typename?: 'SocialsDocAccessFields_socialLink_Update';
    permission: Scalars['Boolean']['output'];
};

export type SocialsDocAccessFields_UpdatedAt = {
    __typename?: 'SocialsDocAccessFields_updatedAt';
    create?: Maybe<SocialsDocAccessFields_UpdatedAt_Create>;
    delete?: Maybe<SocialsDocAccessFields_UpdatedAt_Delete>;
    read?: Maybe<SocialsDocAccessFields_UpdatedAt_Read>;
    update?: Maybe<SocialsDocAccessFields_UpdatedAt_Update>;
};

export type SocialsDocAccessFields_UpdatedAt_Create = {
    __typename?: 'SocialsDocAccessFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type SocialsDocAccessFields_UpdatedAt_Delete = {
    __typename?: 'SocialsDocAccessFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type SocialsDocAccessFields_UpdatedAt_Read = {
    __typename?: 'SocialsDocAccessFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type SocialsDocAccessFields_UpdatedAt_Update = {
    __typename?: 'SocialsDocAccessFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type SocialsFields = {
    __typename?: 'SocialsFields';
    createdAt?: Maybe<SocialsFields_CreatedAt>;
    icon?: Maybe<SocialsFields_Icon>;
    label?: Maybe<SocialsFields_Label>;
    socialLink?: Maybe<SocialsFields_SocialLink>;
    updatedAt?: Maybe<SocialsFields_UpdatedAt>;
};

export type SocialsFields_CreatedAt = {
    __typename?: 'SocialsFields_createdAt';
    create?: Maybe<SocialsFields_CreatedAt_Create>;
    delete?: Maybe<SocialsFields_CreatedAt_Delete>;
    read?: Maybe<SocialsFields_CreatedAt_Read>;
    update?: Maybe<SocialsFields_CreatedAt_Update>;
};

export type SocialsFields_CreatedAt_Create = {
    __typename?: 'SocialsFields_createdAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type SocialsFields_CreatedAt_Delete = {
    __typename?: 'SocialsFields_createdAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type SocialsFields_CreatedAt_Read = {
    __typename?: 'SocialsFields_createdAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type SocialsFields_CreatedAt_Update = {
    __typename?: 'SocialsFields_createdAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type SocialsFields_Icon = {
    __typename?: 'SocialsFields_icon';
    create?: Maybe<SocialsFields_Icon_Create>;
    delete?: Maybe<SocialsFields_Icon_Delete>;
    read?: Maybe<SocialsFields_Icon_Read>;
    update?: Maybe<SocialsFields_Icon_Update>;
};

export type SocialsFields_Icon_Create = {
    __typename?: 'SocialsFields_icon_Create';
    permission: Scalars['Boolean']['output'];
};

export type SocialsFields_Icon_Delete = {
    __typename?: 'SocialsFields_icon_Delete';
    permission: Scalars['Boolean']['output'];
};

export type SocialsFields_Icon_Read = {
    __typename?: 'SocialsFields_icon_Read';
    permission: Scalars['Boolean']['output'];
};

export type SocialsFields_Icon_Update = {
    __typename?: 'SocialsFields_icon_Update';
    permission: Scalars['Boolean']['output'];
};

export type SocialsFields_Label = {
    __typename?: 'SocialsFields_label';
    create?: Maybe<SocialsFields_Label_Create>;
    delete?: Maybe<SocialsFields_Label_Delete>;
    read?: Maybe<SocialsFields_Label_Read>;
    update?: Maybe<SocialsFields_Label_Update>;
};

export type SocialsFields_Label_Create = {
    __typename?: 'SocialsFields_label_Create';
    permission: Scalars['Boolean']['output'];
};

export type SocialsFields_Label_Delete = {
    __typename?: 'SocialsFields_label_Delete';
    permission: Scalars['Boolean']['output'];
};

export type SocialsFields_Label_Read = {
    __typename?: 'SocialsFields_label_Read';
    permission: Scalars['Boolean']['output'];
};

export type SocialsFields_Label_Update = {
    __typename?: 'SocialsFields_label_Update';
    permission: Scalars['Boolean']['output'];
};

export type SocialsFields_SocialLink = {
    __typename?: 'SocialsFields_socialLink';
    create?: Maybe<SocialsFields_SocialLink_Create>;
    delete?: Maybe<SocialsFields_SocialLink_Delete>;
    read?: Maybe<SocialsFields_SocialLink_Read>;
    update?: Maybe<SocialsFields_SocialLink_Update>;
};

export type SocialsFields_SocialLink_Create = {
    __typename?: 'SocialsFields_socialLink_Create';
    permission: Scalars['Boolean']['output'];
};

export type SocialsFields_SocialLink_Delete = {
    __typename?: 'SocialsFields_socialLink_Delete';
    permission: Scalars['Boolean']['output'];
};

export type SocialsFields_SocialLink_Read = {
    __typename?: 'SocialsFields_socialLink_Read';
    permission: Scalars['Boolean']['output'];
};

export type SocialsFields_SocialLink_Update = {
    __typename?: 'SocialsFields_socialLink_Update';
    permission: Scalars['Boolean']['output'];
};

export type SocialsFields_UpdatedAt = {
    __typename?: 'SocialsFields_updatedAt';
    create?: Maybe<SocialsFields_UpdatedAt_Create>;
    delete?: Maybe<SocialsFields_UpdatedAt_Delete>;
    read?: Maybe<SocialsFields_UpdatedAt_Read>;
    update?: Maybe<SocialsFields_UpdatedAt_Update>;
};

export type SocialsFields_UpdatedAt_Create = {
    __typename?: 'SocialsFields_updatedAt_Create';
    permission: Scalars['Boolean']['output'];
};

export type SocialsFields_UpdatedAt_Delete = {
    __typename?: 'SocialsFields_updatedAt_Delete';
    permission: Scalars['Boolean']['output'];
};

export type SocialsFields_UpdatedAt_Read = {
    __typename?: 'SocialsFields_updatedAt_Read';
    permission: Scalars['Boolean']['output'];
};

export type SocialsFields_UpdatedAt_Update = {
    __typename?: 'SocialsFields_updatedAt_Update';
    permission: Scalars['Boolean']['output'];
};

export type SocialsReadAccess = {
    __typename?: 'SocialsReadAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SocialsReadDocAccess = {
    __typename?: 'SocialsReadDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SocialsUpdateAccess = {
    __typename?: 'SocialsUpdateAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SocialsUpdateDocAccess = {
    __typename?: 'SocialsUpdateDocAccess';
    permission: Scalars['Boolean']['output'];
    where?: Maybe<Scalars['JSONObject']['output']>;
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
    testimonials?: Maybe<Array<Testimonial>>;
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
    testimonials?: Maybe<TestimonialListingDocAccessFields_Testimonials>;
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

export type TestimonialListingDocAccessFields_Testimonials = {
    __typename?: 'TestimonialListingDocAccessFields_testimonials';
    create?: Maybe<TestimonialListingDocAccessFields_Testimonials_Create>;
    delete?: Maybe<TestimonialListingDocAccessFields_Testimonials_Delete>;
    read?: Maybe<TestimonialListingDocAccessFields_Testimonials_Read>;
    update?: Maybe<TestimonialListingDocAccessFields_Testimonials_Update>;
};

export type TestimonialListingDocAccessFields_Testimonials_Create = {
    __typename?: 'TestimonialListingDocAccessFields_testimonials_Create';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingDocAccessFields_Testimonials_Delete = {
    __typename?: 'TestimonialListingDocAccessFields_testimonials_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingDocAccessFields_Testimonials_Read = {
    __typename?: 'TestimonialListingDocAccessFields_testimonials_Read';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingDocAccessFields_Testimonials_Update = {
    __typename?: 'TestimonialListingDocAccessFields_testimonials_Update';
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
    testimonials?: Maybe<TestimonialListingFields_Testimonials>;
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

export type TestimonialListingFields_Testimonials = {
    __typename?: 'TestimonialListingFields_testimonials';
    create?: Maybe<TestimonialListingFields_Testimonials_Create>;
    delete?: Maybe<TestimonialListingFields_Testimonials_Delete>;
    read?: Maybe<TestimonialListingFields_Testimonials_Read>;
    update?: Maybe<TestimonialListingFields_Testimonials_Update>;
};

export type TestimonialListingFields_Testimonials_Create = {
    __typename?: 'TestimonialListingFields_testimonials_Create';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingFields_Testimonials_Delete = {
    __typename?: 'TestimonialListingFields_testimonials_Delete';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingFields_Testimonials_Read = {
    __typename?: 'TestimonialListingFields_testimonials_Read';
    permission: Scalars['Boolean']['output'];
};

export type TestimonialListingFields_Testimonials_Update = {
    __typename?: 'TestimonialListingFields_testimonials_Update';
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

export type TestimonialListing_Icon_Base64_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
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
    base64?: InputMaybe<TestimonialListing_Icon_Base64_Operator>;
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
    base64?: InputMaybe<TestimonialListing_Icon_Base64_Operator>;
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
    base64?: InputMaybe<TestimonialListing_Icon_Base64_Operator>;
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

export type Testimonial_Image_Base64_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
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
    base64?: InputMaybe<Testimonial_Image_Base64_Operator>;
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
    base64?: InputMaybe<Testimonial_Image_Base64_Operator>;
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
    base64?: InputMaybe<Testimonial_Image_Base64_Operator>;
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

export type TextBlock = {
    __typename?: 'TextBlock';
    blockName?: Maybe<Scalars['String']['output']>;
    blockType?: Maybe<Scalars['String']['output']>;
    heading?: Maybe<Scalars['String']['output']>;
    id?: Maybe<Scalars['String']['output']>;
    text?: Maybe<Scalars['JSON']['output']>;
};

export type TextBlockTextArgs = {
    depth?: InputMaybe<Scalars['Int']['input']>;
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

export type Tool_Icon_Base64_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
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
    base64?: InputMaybe<Tool_Icon_Base64_Operator>;
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
    base64?: InputMaybe<Tool_Icon_Base64_Operator>;
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
    base64?: InputMaybe<Tool_Icon_Base64_Operator>;
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
    description?: Maybe<Scalars['String']['output']>;
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
    description?: Maybe<ToolboxListingDocAccessFields_Description>;
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

export type ToolboxListingDocAccessFields_Description = {
    __typename?: 'ToolboxListingDocAccessFields_description';
    create?: Maybe<ToolboxListingDocAccessFields_Description_Create>;
    delete?: Maybe<ToolboxListingDocAccessFields_Description_Delete>;
    read?: Maybe<ToolboxListingDocAccessFields_Description_Read>;
    update?: Maybe<ToolboxListingDocAccessFields_Description_Update>;
};

export type ToolboxListingDocAccessFields_Description_Create = {
    __typename?: 'ToolboxListingDocAccessFields_description_Create';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingDocAccessFields_Description_Delete = {
    __typename?: 'ToolboxListingDocAccessFields_description_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingDocAccessFields_Description_Read = {
    __typename?: 'ToolboxListingDocAccessFields_description_Read';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingDocAccessFields_Description_Update = {
    __typename?: 'ToolboxListingDocAccessFields_description_Update';
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
    description?: Maybe<ToolboxListingFields_Description>;
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

export type ToolboxListingFields_Description = {
    __typename?: 'ToolboxListingFields_description';
    create?: Maybe<ToolboxListingFields_Description_Create>;
    delete?: Maybe<ToolboxListingFields_Description_Delete>;
    read?: Maybe<ToolboxListingFields_Description_Read>;
    update?: Maybe<ToolboxListingFields_Description_Update>;
};

export type ToolboxListingFields_Description_Create = {
    __typename?: 'ToolboxListingFields_description_Create';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingFields_Description_Delete = {
    __typename?: 'ToolboxListingFields_description_Delete';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingFields_Description_Read = {
    __typename?: 'ToolboxListingFields_description_Read';
    permission: Scalars['Boolean']['output'];
};

export type ToolboxListingFields_Description_Update = {
    __typename?: 'ToolboxListingFields_description_Update';
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

export type ToolboxListing_Icon_Base64_Operator = {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
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
    base64?: InputMaybe<ToolboxListing_Icon_Base64_Operator>;
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
    base64?: InputMaybe<ToolboxListing_Icon_Base64_Operator>;
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
    base64?: InputMaybe<ToolboxListing_Icon_Base64_Operator>;
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

export type AboutAccess = {
    __typename?: 'aboutAccess';
    fields?: Maybe<AboutFields>;
    read?: Maybe<AboutReadAccess>;
    update?: Maybe<AboutUpdateAccess>;
};

export type AboutDocAccess = {
    __typename?: 'aboutDocAccess';
    fields?: Maybe<AboutDocAccessFields>;
    read?: Maybe<AboutReadDocAccess>;
    update?: Maybe<AboutUpdateDocAccess>;
};

export type Case_StudiesAccess = {
    __typename?: 'case_studiesAccess';
    create?: Maybe<CaseStudiesCreateAccess>;
    delete?: Maybe<CaseStudiesDeleteAccess>;
    fields?: Maybe<CaseStudiesFields>;
    read?: Maybe<CaseStudiesReadAccess>;
    update?: Maybe<CaseStudiesUpdateAccess>;
};

export type Case_StudiesDocAccess = {
    __typename?: 'case_studiesDocAccess';
    create?: Maybe<CaseStudiesCreateDocAccess>;
    delete?: Maybe<CaseStudiesDeleteDocAccess>;
    fields?: Maybe<CaseStudiesDocAccessFields>;
    read?: Maybe<CaseStudiesReadDocAccess>;
    update?: Maybe<CaseStudiesUpdateDocAccess>;
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

export type CtasAccess = {
    __typename?: 'ctasAccess';
    create?: Maybe<CtasCreateAccess>;
    delete?: Maybe<CtasDeleteAccess>;
    fields?: Maybe<CtasFields>;
    read?: Maybe<CtasReadAccess>;
    update?: Maybe<CtasUpdateAccess>;
};

export type CtasDocAccess = {
    __typename?: 'ctasDocAccess';
    create?: Maybe<CtasCreateDocAccess>;
    delete?: Maybe<CtasDeleteDocAccess>;
    fields?: Maybe<CtasDocAccessFields>;
    read?: Maybe<CtasReadDocAccess>;
    update?: Maybe<CtasUpdateDocAccess>;
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

export type MutationAboutInput = {
    coloredSubhead?: InputMaybe<Scalars['JSON']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    image?: InputMaybe<Scalars['String']['input']>;
    pets?: InputMaybe<MutationAbout_PetsInput>;
    text?: InputMaybe<Scalars['JSON']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationAbout_PetsInput = {
    athena?: InputMaybe<Scalars['String']['input']>;
    harvey?: InputMaybe<Scalars['String']['input']>;
    jasper?: InputMaybe<Scalars['String']['input']>;
    warren?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCaseStudyInput = {
    caseStudySections?: InputMaybe<Scalars['JSON']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    excerpt?: InputMaybe<Scalars['String']['input']>;
    featuredImage?: InputMaybe<Scalars['String']['input']>;
    internalTitle?: InputMaybe<Scalars['String']['input']>;
    intro?: InputMaybe<MutationCaseStudy_IntroInput>;
    meta?: InputMaybe<MutationCaseStudy_MetaInput>;
    slug?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCaseStudyListingInput = {
    caseStudies?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    icon?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCaseStudyUpdateInput = {
    caseStudySections?: InputMaybe<Scalars['JSON']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    excerpt?: InputMaybe<Scalars['String']['input']>;
    featuredImage?: InputMaybe<Scalars['String']['input']>;
    internalTitle?: InputMaybe<Scalars['String']['input']>;
    intro?: InputMaybe<MutationCaseStudyUpdate_IntroInput>;
    meta?: InputMaybe<MutationCaseStudyUpdate_MetaInput>;
    slug?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCaseStudyUpdate_IntroInput = {
    cta?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    heading?: InputMaybe<Scalars['String']['input']>;
    image?: InputMaybe<Scalars['String']['input']>;
    text?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationCaseStudyUpdate_MetaInput = {
    description?: InputMaybe<Scalars['String']['input']>;
    image?: InputMaybe<Scalars['String']['input']>;
    noIndex?: InputMaybe<Scalars['Boolean']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCaseStudy_IntroInput = {
    cta?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    heading?: InputMaybe<Scalars['String']['input']>;
    image?: InputMaybe<Scalars['String']['input']>;
    text?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationCaseStudy_MetaInput = {
    description?: InputMaybe<Scalars['String']['input']>;
    image?: InputMaybe<Scalars['String']['input']>;
    noIndex?: InputMaybe<Scalars['Boolean']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCtaInput = {
    createdAt?: InputMaybe<Scalars['String']['input']>;
    externalLink?: InputMaybe<Scalars['String']['input']>;
    fullTitle?: InputMaybe<Scalars['String']['input']>;
    internalLink?: InputMaybe<Scalars['String']['input']>;
    label?: InputMaybe<Scalars['String']['input']>;
    linkType?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCtaUpdateInput = {
    createdAt?: InputMaybe<Scalars['String']['input']>;
    externalLink?: InputMaybe<Scalars['String']['input']>;
    fullTitle?: InputMaybe<Scalars['String']['input']>;
    internalLink?: InputMaybe<Scalars['String']['input']>;
    label?: InputMaybe<Scalars['String']['input']>;
    linkType?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationHeroInput = {
    coloredSubhead?: InputMaybe<Scalars['JSON']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    cta?: InputMaybe<Scalars['String']['input']>;
    doodles?: InputMaybe<Scalars['Boolean']['input']>;
    heading: Scalars['String']['input'];
    headingTag: Scalars['String']['input'];
    homepage?: InputMaybe<Scalars['Boolean']['input']>;
    icon?: InputMaybe<Scalars['String']['input']>;
    subhead?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationHeroUpdateInput = {
    coloredSubhead?: InputMaybe<Scalars['JSON']['input']>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    cta?: InputMaybe<Scalars['String']['input']>;
    doodles?: InputMaybe<Scalars['Boolean']['input']>;
    heading?: InputMaybe<Scalars['String']['input']>;
    headingTag?: InputMaybe<Scalars['String']['input']>;
    homepage?: InputMaybe<Scalars['Boolean']['input']>;
    icon?: InputMaybe<Scalars['String']['input']>;
    subhead?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationIconInput = {
    alt: Scalars['String']['input'];
    base64?: InputMaybe<Scalars['String']['input']>;
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
    base64?: InputMaybe<Scalars['String']['input']>;
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
    base64?: InputMaybe<Scalars['String']['input']>;
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
    base64?: InputMaybe<Scalars['String']['input']>;
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
    linkToSection?: InputMaybe<Scalars['Boolean']['input']>;
    overridePageName?: InputMaybe<Scalars['Boolean']['input']>;
    page?: InputMaybe<Scalars['String']['input']>;
    sectionId?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPageInput = {
    createdAt?: InputMaybe<Scalars['String']['input']>;
    meta?: InputMaybe<MutationPage_MetaInput>;
    pageSections?: InputMaybe<Scalars['JSON']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPageUpdateInput = {
    createdAt?: InputMaybe<Scalars['String']['input']>;
    meta?: InputMaybe<MutationPageUpdate_MetaInput>;
    pageSections?: InputMaybe<Scalars['JSON']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPageUpdate_MetaInput = {
    description?: InputMaybe<Scalars['String']['input']>;
    image?: InputMaybe<Scalars['String']['input']>;
    noIndex?: InputMaybe<Scalars['Boolean']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPage_MetaInput = {
    description?: InputMaybe<Scalars['String']['input']>;
    image?: InputMaybe<Scalars['String']['input']>;
    noIndex?: InputMaybe<Scalars['Boolean']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProjectInput = {
    caseStudies?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    excerpt?: InputMaybe<Scalars['String']['input']>;
    featuredImage?: InputMaybe<Scalars['String']['input']>;
    intro?: InputMaybe<MutationProject_IntroInput>;
    meta?: InputMaybe<MutationProject_MetaInput>;
    projectSections?: InputMaybe<Scalars['JSON']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProjectUpdateInput = {
    caseStudies?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    createdAt?: InputMaybe<Scalars['String']['input']>;
    excerpt?: InputMaybe<Scalars['String']['input']>;
    featuredImage?: InputMaybe<Scalars['String']['input']>;
    intro?: InputMaybe<MutationProjectUpdate_IntroInput>;
    meta?: InputMaybe<MutationProjectUpdate_MetaInput>;
    projectSections?: InputMaybe<Scalars['JSON']['input']>;
    slug?: InputMaybe<Scalars['String']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProjectUpdate_IntroInput = {
    cta?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    description?: InputMaybe<Scalars['String']['input']>;
    image?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProjectUpdate_MetaInput = {
    description?: InputMaybe<Scalars['String']['input']>;
    image?: InputMaybe<Scalars['String']['input']>;
    noIndex?: InputMaybe<Scalars['Boolean']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProject_IntroInput = {
    cta?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    description?: InputMaybe<Scalars['String']['input']>;
    image?: InputMaybe<Scalars['String']['input']>;
};

export type MutationProject_MetaInput = {
    description?: InputMaybe<Scalars['String']['input']>;
    image?: InputMaybe<Scalars['String']['input']>;
    noIndex?: InputMaybe<Scalars['Boolean']['input']>;
    title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSocialInput = {
    createdAt?: InputMaybe<Scalars['String']['input']>;
    icon: Scalars['String']['input'];
    label: Scalars['String']['input'];
    socialLink?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSocialUpdateInput = {
    createdAt?: InputMaybe<Scalars['String']['input']>;
    icon?: InputMaybe<Scalars['String']['input']>;
    label?: InputMaybe<Scalars['String']['input']>;
    socialLink?: InputMaybe<Scalars['String']['input']>;
    updatedAt?: InputMaybe<Scalars['String']['input']>;
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
    testimonials?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
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
    description?: InputMaybe<Scalars['String']['input']>;
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

export type SocialsAccess = {
    __typename?: 'socialsAccess';
    create?: Maybe<SocialsCreateAccess>;
    delete?: Maybe<SocialsDeleteAccess>;
    fields?: Maybe<SocialsFields>;
    read?: Maybe<SocialsReadAccess>;
    update?: Maybe<SocialsUpdateAccess>;
};

export type SocialsDocAccess = {
    __typename?: 'socialsDocAccess';
    create?: Maybe<SocialsCreateDocAccess>;
    delete?: Maybe<SocialsDeleteDocAccess>;
    fields?: Maybe<SocialsDocAccessFields>;
    read?: Maybe<SocialsReadDocAccess>;
    update?: Maybe<SocialsUpdateDocAccess>;
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
