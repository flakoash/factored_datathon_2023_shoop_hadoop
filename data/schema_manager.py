from pyspark.sql.types import StructType, StructField, StringType, IntegerType, DoubleType, ArrayType

class Schema_manager:

    review_schema = StructType([
        StructField("asin", StringType(), True),
        StructField("image", StringType(), True),
        StructField("overall", StringType(), True),
        StructField("reviewText", StringType(), True),
        StructField("reviewerID", StringType(), True),
        StructField("reviewerName", StringType(), True),
        StructField("style", StringType(), True),
        StructField("summary", StringType(), True),
        StructField("unixReviewTime", StringType(), True),
        StructField("verified", StringType(), True),
        StructField("vote", StringType(), True)
    ])

    metadata_json_schema = StructType([
        StructField("also_buy", ArrayType(StringType(), True), True),
        StructField("also_view", ArrayType(StringType(), True), True),
        StructField('asin', StringType(), True),
        StructField('brand', StringType(), True),
        StructField('category', ArrayType(StringType(), True), True),
        StructField('date', StringType(), True),
        StructField('description', ArrayType(StringType(), True), True),
        StructField('details', StructType(), True),
        StructField('feature', ArrayType(StringType(), True), True),
        StructField('fit', StringType(), True),
        StructField('image', ArrayType(StringType(), True), True),
        StructField('main_cat', StringType(), True),
        StructField('price', StringType(), True),
        StructField('rank', StringType(), True),
        StructField('similar_item', StringType(), True),
        StructField('tech1', StringType(), True),
        StructField('tech2', StringType(), True),
        StructField('title', StringType(), True)
    ])