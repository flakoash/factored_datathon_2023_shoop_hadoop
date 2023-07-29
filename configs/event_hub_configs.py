import pyspark
from pyspark.sql import SparkSession
from datetime import datetime as dt
import json


class Event_hub_configs:
    @staticmethod
    def configure(access_key_name: str, shared_access_key: str, entity_path: str) -> str:
        spark = SparkSession.getActiveSession()
        sc = spark.sparkContext

        connectionString = f"Endpoint=sb://factored-datathon.servicebus.windows.net/;SharedAccessKeyName={access_key_name};SharedAccessKey={shared_access_key};EntityPath={entity_path}"

        # Start from beginning of stream
        startOffset = "-1"
        # End at the current time. This datetime formatting creates the correct string format from a python datetime object
        endTime = dt.now().strftime("%Y-%m-%dT%H:%M:%S.%fZ")
        # Create the positions
        startingEventPosition = {
            "offset": startOffset,
            "seqNo": -1,            #not in use
            "enqueuedTime": None,   #not in use
            "isInclusive": True
        }

        endingEventPosition = {
            "offset": None,           #not in use
            "seqNo": -1,              #not in use
            "enqueuedTime": endTime,
            "isInclusive": True
        }

        ehConf = {}
        ehConf['eventhubs.connectionString'] = connectionString
        # Add consumer group to the ehConf dictionary
        ehConf['eventhubs.consumerGroup'] = "$Default"
        # Encrypt ehConf connectionString property
        ehConf['eventhubs.connectionString'] = sc._jvm.org.apache.spark.eventhubs.EventHubsUtils.encrypt(connectionString)
        ehConf["eventhubs.startingPosition"] = json.dumps(startingEventPosition)
        ehConf["eventhubs.endingPosition"] = json.dumps(endingEventPosition)
        return ehConf
