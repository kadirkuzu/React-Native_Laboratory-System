export class Analysis {
    id!: string
    values!: AnalyzValue
    patientName!: string
    date!: string
}

export type AnalyzValue = { age: string, values: { key: string, value: string }[] }