from ..configs.ADLS_configs import ADLS_configs


class ADLS_manager:
    @staticmethod
    def init_data_source(storage_account: str, container: str, sas_token: str) -> str:
        base_path = f"abfss://{container}@{storage_account}.dfs.core.windows.net"
        ADLS_configs.configure(storage_account, sas_token)
        return base_path
