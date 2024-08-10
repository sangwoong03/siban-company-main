"""
Modify users table
"""

from yoyo import step

__depends__ = {'01_create_users_table'}

steps = [
    step("ALTER TABLE users MODIFY phone_number VARCHAR(25) NULL;"),
    step("ALTER TABLE users DROP deleted_at;"),
    step("ALTER TABLE users ADD social_id VARCHAR(19) NULL;"),
    step("ALTER TABLE users ADD UNIQUE KEY users_social_id (social_id);")
]
