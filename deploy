FROM="build/"
TO_BUCKET_1="s3://paulyeo.com"
TO_BUCKET_2="s3://www.paulyeo.com"

# Upload build/ files to S3
aws s3 cp "$FROM" "$TO_BUCKET_1" --recursive
aws s3 cp "$FROM" "$TO_BUCKET_2" --recursive
