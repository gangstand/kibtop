def transl_for(list_en: list, language: str) -> list:
    from translatepy import Translator
    list_transl = []
    for i in list_en:
        transl = Translator().translate(str(i[0]), language).result
        list_transl.append((transl, transl))
    return list_transl
