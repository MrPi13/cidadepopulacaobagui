class Cidade{
    constructor(nome,estado,numPopulacao,numHomens,NumMulheres)
    {
        this.nome=nome
        this.estado=estado
        this.numPopulacao=numPopulacao
        this.numHomens=numHomens
        this.NumMulheres=NumMulheres
    }
    percentualHomens()
    {
    let percentual = 0.0
    percentual = (this.numHomens/this.numPopulacao)*100.0
    return percentual
        
    }
    percentualMulheres()
    {
        let percentual = 0.0
        percentual = (this.NumMulheres/this.numPopulacao)*100.0
        return percentual
    }
}

module.exports = Cidade