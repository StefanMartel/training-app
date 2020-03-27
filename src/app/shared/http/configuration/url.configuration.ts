import { Injectable } from "@angular/core";

export enum urlGroupEnum {
    'TRAINING' = 'training'
}

@Injectable({
    providedIn: 'root'
  })
export class UrlConfiguration {

    public backEndUrlList: {} = {
        'getTrainingListByUser': `api/${urlGroupEnum.TRAINING}/{user}/list`,
        'addTraining': `api/${urlGroupEnum.TRAINING}/add`,
        'deleteTrainingByTrainingId': `api/${urlGroupEnum.TRAINING}/{trainingId}/delete`,
    };

    /**
     * renvoie l'URL devant être utilisée pour les appels aux backEnd
     * @param  key Clef désignant l'URI à utiliser (PNC, career-objective, etc...)
     * @param  params paramètres à intégrer dans l'URL (tableau de param)
     * @return url du backEnd vers laquelle pointer
     */
    public getBackEndUrl(key, params = []): string {
        let urlToModify = this.backEndUrlList[key];
        // Les paramètres étant entre crochets, il faut les identifier avant de les remplacer
        // Les noms ne sont jamais les mêmes
        const regexToReplace = /{[a-zA-Z]*}/;
        // Remplacement des paramètres de l'URL
        for (let i = 0; i < params.length; i++) {
            urlToModify = urlToModify.replace(regexToReplace, params[i]);
        }
        return urlToModify;
    }

}
