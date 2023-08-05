import re


class Cleaning_utils:
    @staticmethod
    def sanitize_col_name(name):
        if (name == 'ASIN: '):
            return 'asin_2'
        return name.replace('\n', '')\
                    .replace(':', '')\
                    .lower()\
                    .strip()\
                    .replace(' ', '_')

    @udf(returnType=ArrayType(StringType())
    def remove_html_tags_udf(text_array):
        return [re.sub('<.*?>', '', text) for text in text_array]
