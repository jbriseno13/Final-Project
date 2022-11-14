/* Replace with your SQL commands */

CREATE TABLE public.favvideos (
    id integer NOT NULL,
    user_id integer NOT NULL,
    video_rating text,
    video_topic text,
    video_id text
);

CREATE TABLE public.resourcesnumbers (
    id integer NOT NULL,
    image text,
    name text,
    phone text,
    website text,
    note text
);

CREATE TABLE public.users (
    lastname text,
    firstname text,
    email text,
    sub text,
    id integer DEFAULT nextval('public.users_id_seq'::regclass) NOT NULL
);




INSERT INTO public.users (lastname, firstname, email, sub, id) OVERRIDING SYSTEM VALUE VALUES ('test1', '(310)123-4567', NULL, 'English', 1);
INSERT INTO public.users (lastname, firstname, email, sub, id) OVERRIDING SYSTEM VALUE VALUES ('Briseno', 'Joslyn', 'jbriseno1013@gmail.com', 'google-oauth2|114470412835078254308', 2);
INSERT INTO public.users (lastname, firstname, email, sub, id) OVERRIDING SYSTEM VALUE VALUES ('Briseno', 'Joslyn', 'jbriseno@ucdavis.edu', 'google-oauth2|116669293470467237585', 3);


SELECT pg_catalog.setval('public.users_id_seq', 3, true);
