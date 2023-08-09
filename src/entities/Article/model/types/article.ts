export enum ArticleBlockType {
    IMAGE = "IMAGE",
    CODE = "CODE",
    TEXT = "TEXT",
}

export interface AricleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock extends AricleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleTextBlock extends AricleBlockBase {
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[];
}

export interface ArticleImageBlock extends AricleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title?: string;
}

export type ArticleBlock =
    | ArticleCodeBlock
    | ArticleTextBlock
    | ArticleImageBlock;

export enum ArticleType {
    IT = "IT",
    SCIENCE = "SCIENCE",
    ECONOMICS = "ECONOMICS",
}

export interface Article {
    id?: string;
    title?: string;
    img?: string;
    subtitle?: string;
    views?: number;
    createdAt?: string;
    type?: ArticleType[];
    blocks?: ArticleBlock[];
}
