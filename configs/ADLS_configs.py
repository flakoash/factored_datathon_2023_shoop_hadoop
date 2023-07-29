import pyspark
from pyspark.sql import SparkSession


class ADLS_configs:
    @staticmethod
    def configure(storage_account: str, sas_token: str):
        spark = SparkSession.getActiveSession()
        spark.conf.set(
            f"fs.azure.account.auth.type.{storage_account}.dfs.core.windows.net", "SAS")
        spark.conf.set(f"fs.azure.sas.token.provider.type.{storage_account}.dfs.core.windows.net",
                       "org.apache.hadoop.fs.azurebfs.sas.FixedSASTokenProvider")
        spark.conf.set(
            f"fs.azure.sas.fixed.token.{storage_account}.dfs.core.windows.net", sas_token)
