#!/bin/sh
#
# Cloud Hook: post-db-copy
#
# Scrubs user email addresses after a database is copied into this
# environment, so non-production copies do not hold real addresses.
# Passwords are left unchanged so developers can still log in.
#
# Usage: db-scrub.sh site target-env db-name source-env

set -e

site="$1"
target_env="$2"
db_name="$3"
source_env="$4"

echo "$site.$target_env: Scrubbing database $db_name copied from $source_env"

cd "/var/www/html/$site.$target_env"

# sql:sanitize rewrites users_field_data.mail and .init for every account
# except uid 0, truncates sessions and sanitizes user text fields.
./vendor/bin/drush sql:sanitize --yes \
  --sanitize-email='user+%uid@example.com' \
  --sanitize-password=no
