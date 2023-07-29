from ..configs.event_hub_configs import Event_hub_configs
import pyspark
from pyspark.sql import SparkSession

class event_hub_manager:
    @staticmethod
    def init_data_source(access_key_name: str, shared_access_key: str, entity_path: str):
        spark = SparkSession.getActiveSession()
        ehConf = Event_hub_configs.configure(access_key_name, shared_access_key, entity_path)
        return spark.readStream.format("eventhubs").options(**ehConf).load()
