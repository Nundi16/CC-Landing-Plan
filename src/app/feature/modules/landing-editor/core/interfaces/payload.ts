export interface payload{
    header: string,
    article: string,
    cardSection1: cardSection
}

export interface cardSection{
    title:string,
    cards:Array<card>
}

export interface card{
    title: string
    text:string
}

export function isCardSection(obj: any): obj is cardSection {
    return obj &&
    Array.isArray(obj.cards) &&
    typeof obj.title === 'string' &&
    obj.cards.every((card: any) => isCard(card));
}

export function isCard(obj:any): obj is card{
    return obj &&
    typeof obj.title === 'string' &&
    typeof obj.text === 'string'
}