
class Cleaning_utils:
    @staticmethod
    def sanitize_col_name(name):
        if(name == 'ASIN: '):
            return 'asin_2'
        return name.replace('\n', '')\
                    .replace(':', '')\
                    .lower()\
                    .strip()\
                    .replace(' ', '_')