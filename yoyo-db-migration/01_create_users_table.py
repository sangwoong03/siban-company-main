"""
Create users table
"""

from yoyo import step

__depends__ = {}

steps = [
    step("""
        CREATE TABLE user_types (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(200) NOT NULL
        );
    """),
    step("""
        INSERT INTO user_types (id, name)
        VALUES (1, "PUBLIC"), (2, "ACTOR"), (3, "ADMIN");
    """),
    step("""
        CREATE TABLE users (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(30) NOT NULL,
            email VARCHAR(250) NOT NULL,
            password BINARY(60) NOT NULL,
            phone_number VARCHAR(25) NOT NULL,
            user_type_id INT NOT NULL DEFAULT 1,
            created_at TIMESTAMP NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
            deleted_at TIMESTAMP NULL,
            CONSTRAINT users_user_type_id
                FOREIGN KEY (user_type_id) REFERENCES user_types (id)
        );
    """)
]
