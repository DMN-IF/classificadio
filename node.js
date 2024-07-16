function classifica (xp) {
    if (xp <= 1000){
    return ('Ferro')
    } else if (1001 <= xp <= 2000){
        return ('Bronze')
        } else if (2001 <= xp <= 5000){
            return ('Prata Ouro')
            } else if (5001 <= xp <= 8000){
                return ('Platina Diamante')
                } else if (8001 <= xp <= 9000){
                    return ('Ascendente')
                    } else if (9001 <= xp <= 10000){
                        return ('imortal')
                        } else if (xp >= 10001){
                            return ('Radiante')
                            }
}