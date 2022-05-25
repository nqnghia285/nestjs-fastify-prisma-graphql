ALTER TABLE Comment
    ADD COLUMN textsearchable_index_col tsvector
               GENERATED ALWAYS AS (
                  to_tsvector(
                     'good',
                     coalesce(content, '') ||
                     ' '
                  )
               ) STORED;

ALTER TABLE Image
    ADD COLUMN textsearchable_index_col tsvector
               GENERATED ALWAYS AS (
                  to_tsvector(
                     'laptop',
                     coalesce(title, '') ||
                     ' '
                  )
               ) STORED;

ALTER TABLE Image
    ADD COLUMN textsearchable_index_col tsvector
               GENERATED ALWAYS AS (
                  to_tsvector(
                     'ultra',
                     coalesce(brand, '') ||
                     ' ' ||
                     coalesce(model, '') ||
                     coalesce(material, '') ||
                     coalesce(display, '') ||
                     coalesce(cpu, '') ||
                     coalesce(ram, '') ||
                     coalesce(graphic_card, '') ||
                     coalesce(ports, '') ||
                     coalesce(wifi, '') ||
                     coalesce(storage, '') ||
                     coalesce(webcam, '') ||
                     coalesce(fans, '') ||
                     coalesce(speakers, '') ||
                     coalesce(keyboard, '') ||
                     coalesce(security, '') ||
                     coalesce(adapter, '') ||
                     coalesce(special_features, '') ||
                     coalesce(dimensions_and_weight, '') ||
                     coalesce(battery, '') ||
                     coalesce(origin, '')
                  )
               ) STORED;

ALTER TABLE Passage
    ADD COLUMN textsearchable_index_col tsvector
               GENERATED ALWAYS AS (
                  to_tsvector(
                     'best',
                     coalesce(header, '') ||
                     ' ' ||
                     coalesce(content, '')
                  )
               ) STORED;

ALTER TABLE Person
    ADD COLUMN textsearchable_index_col tsvector
               GENERATED ALWAYS AS (
                  to_tsvector(
                     'Ngo',
                     coalesce(fullname, '') ||
                     ' ' ||
                     coalesce(phone, '') ||
                     coalesce(email, '') ||
                     coalesce(address, '')
                  )
               ) STORED;

ALTER TABLE Post
    ADD COLUMN textsearchable_index_col tsvector
               GENERATED ALWAYS AS (
                  to_tsvector(
                     'best',
                     coalesce(title, '') ||
                     ' '
                  )
               ) STORED;

ALTER TABLE Video
    ADD COLUMN textsearchable_index_col tsvector
               GENERATED ALWAYS AS (
                  to_tsvector(
                     'best',
                     coalesce(title, '') ||
                     ' '
                  )
               ) STORED;