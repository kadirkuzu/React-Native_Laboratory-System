export class Guide {
    id?: string
    name!: string;
    IgA?: GuideValue[]
    IgM?: GuideValue[]
    IgG?: GuideValue[]
    IgG1?: GuideValue[]
    IgG2?: GuideValue[]
    IgG3?: GuideValue[]
    IgG4?: GuideValue[]
}

export class GuideValue {
    minMonths!: number
    maxMonths!: number
    minValue!: number
    maxValue!: number
}

export const GuideValueKeys = ["IgA","IgG","IgM","IgG1","IgG2","IgG3","IgG4"] as (keyof Guide)[]

export const createNewGuide = () => {
    return {
        name: '',
        IgA: [
            {minMonths: 0, maxMonths: 0, maxValue: 0, minValue: 0}
        ],
        IgM: [
            {minMonths: 0, maxMonths: 0, maxValue: 0, minValue: 0}
        ],
        IgG: [
            {minMonths: 0, maxMonths: 0, maxValue: 0, minValue: 0}
        ],
        IgG1: [
            {minMonths: 0, maxMonths: 0, maxValue: 0, minValue: 0}
        ],
        IgG2: [
            {minMonths: 0, maxMonths: 0, maxValue: 0, minValue: 0}
        ],
        IgG3: [
            {minMonths: 0, maxMonths: 0, maxValue: 0, minValue: 0}
        ],
        IgG4: [
            {minMonths: 0, maxMonths: 0, maxValue: 0, minValue: 0}
        ],
    }
}