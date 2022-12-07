from translatepy import Translator


def transl_for(list_en: list, language: str) -> list:
    list_transl = []
    for i in list_en:
        transl = Translator().translate(str(i[0]), language).result
        list_transl.append((transl, transl))
    return list_transl
