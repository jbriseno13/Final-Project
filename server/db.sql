--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Homebrew)
-- Dumped by pg_dump version 14.5 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: landingpagecontent; Type: TABLE; Schema: public; Owner: tpl522_2
--

CREATE TABLE public.landingpagecontent (
    id integer NOT NULL,
    description text,
    details text,
    image text
);


ALTER TABLE public.landingpagecontent OWNER TO tpl522_2;

--
-- Name: appdescription_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_2
--

ALTER TABLE public.landingpagecontent ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.appdescription_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: books; Type: TABLE; Schema: public; Owner: tpl522_2
--

CREATE TABLE public.books (
    id integer NOT NULL,
    title text,
    author text,
    description text,
    website text,
    image text
);


ALTER TABLE public.books OWNER TO tpl522_2;

--
-- Name: books_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_2
--

ALTER TABLE public.books ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.books_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: favvideos; Type: TABLE; Schema: public; Owner: tpl522_2
--

CREATE TABLE public.favvideos (
    id integer NOT NULL,
    user_id integer NOT NULL,
    title text,
    thumbnails text,
    video_id text
);


ALTER TABLE public.favvideos OWNER TO tpl522_2;

--
-- Name: migrations; Type: TABLE; Schema: public; Owner: tpl522_2
--

CREATE TABLE public.migrations (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    run_on timestamp without time zone NOT NULL
);


ALTER TABLE public.migrations OWNER TO tpl522_2;

--
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_2
--

CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.migrations_id_seq OWNER TO tpl522_2;

--
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tpl522_2
--

ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;


--
-- Name: posts; Type: TABLE; Schema: public; Owner: tpl522_2
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    date text,
    question text,
    post text,
    user_id integer
);


ALTER TABLE public.posts OWNER TO tpl522_2;

--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_2
--

ALTER TABLE public.posts ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.posts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: resourcesnumbers_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_2
--

CREATE SEQUENCE public.resourcesnumbers_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.resourcesnumbers_id_seq OWNER TO tpl522_2;

--
-- Name: resourcesnumbers; Type: TABLE; Schema: public; Owner: tpl522_2
--

CREATE TABLE public.resourcesnumbers (
    image text,
    name text,
    phone text,
    website text,
    note text,
    id integer DEFAULT nextval('public.resourcesnumbers_id_seq'::regclass) NOT NULL
);


ALTER TABLE public.resourcesnumbers OWNER TO tpl522_2;

--
-- Name: user_favorites; Type: TABLE; Schema: public; Owner: tpl522_2
--

CREATE TABLE public.user_favorites (
    id integer NOT NULL,
    user_id integer,
    video_id integer,
    title text,
    thumbnails text
);


ALTER TABLE public.user_favorites OWNER TO tpl522_2;

--
-- Name: user_favorites_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_2
--

ALTER TABLE public.user_favorites ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.user_favorites_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_2
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO tpl522_2;

--
-- Name: users; Type: TABLE; Schema: public; Owner: tpl522_2
--

CREATE TABLE public.users (
    lastname text,
    firstname text,
    email text,
    sub text,
    id integer DEFAULT nextval('public.users_id_seq'::regclass) NOT NULL
);


ALTER TABLE public.users OWNER TO tpl522_2;

--
-- Name: videodetails; Type: TABLE; Schema: public; Owner: tpl522_2
--

CREATE TABLE public.videodetails (
    id integer NOT NULL,
    "channelId" text,
    "videoId" text
);


ALTER TABLE public.videodetails OWNER TO tpl522_2;

--
-- Name: videodetails_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_2
--

ALTER TABLE public.videodetails ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.videodetails_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: videos_id_seq; Type: SEQUENCE; Schema: public; Owner: tpl522_2
--

ALTER TABLE public.favvideos ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.videos_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: tpl522_2
--

ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);


--
-- Data for Name: books; Type: TABLE DATA; Schema: public; Owner: tpl522_2
--

COPY public.books (id, title, author, description, website, image) FROM stdin;
1	I Am Not Your Perfect Mexican Daughter	Erika Sanchez, 2017	\N	\N	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWiv9ajvlVn_odWRuIWZNtybFb24o7GhAHNEkIu7gDd4uCzBFI
2	Mexican Gothic	Silvia Moreno-Garcia, 2020	\N	\N	data:image/jpeg;base64,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
3	Sabrina & Corina: Stories	Kali Fajardo-Anstine, 2019	\N	\N	https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRhT4C5ci540YkzMz0j12CE0wG0r7UccppAfTBPqsNg4wtCiDil
4	Olga Dies Dreaming	Xochitl Gonzalez, 2022	\N	\N	https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR000ZH7QIHN-6XNCqXZFiSmM-iNrxZ_Bfw5dCsVIOTLf3m5f72
5	Dominicana: A Novel	Angie Cruz, 2019	\N	\N	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3zhiaomIiWG4Qot4P_GKKJfflJ3jxC80Tqqdz8LWwpCjl1Ptw
6	What Would Frida Do? A Guide to Living Boldly	Arianna Davis, 2020	\N	\N	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmQzu9V6URGQW72oShr6DJSNFKJ2FUtcXxiGUQ8g-IK1EF1gqa
\.


--
-- Data for Name: favvideos; Type: TABLE DATA; Schema: public; Owner: tpl522_2
--

COPY public.favvideos (id, user_id, title, thumbnails, video_id) FROM stdin;
45	2	Affirmations for Health, Wealth, Happiness &quot;Healthy, Wealthy &amp; Wise&quot; 30 Day Program	https://i.ytimg.com/vi/A0rvRF8BKGo/mqdefault.jpg	A0rvRF8BKGo
46	2	LISTEN EVERY DAY! &quot;I AM&quot; affirmations for Success	https://i.ytimg.com/vi/maNr_0zK5VQ/mqdefault.jpg	maNr_0zK5VQ
47	2	6 ways to heal trauma without medication | Bessel van der Kolk | Big Think	https://i.ytimg.com/vi/ZoZT8-HqI64/mqdefault.jpg	ZoZT8-HqI64
48	2	The psychology of post-traumatic stress disorder - Joelle Rabow Maletis	https://i.ytimg.com/vi/b_n9qegR7C4/mqdefault.jpg	b_n9qegR7C4
\.


--
-- Data for Name: landingpagecontent; Type: TABLE DATA; Schema: public; Owner: tpl522_2
--

COPY public.landingpagecontent (id, description, details, image) FROM stdin;
2	Use the Search Bar	Just like Yelp you can search in the search bar above for a therapist by name, specialty, your insurance, and then it will prompt you to enter your location. Once your on the search page you can filter down by things like gender, payment type, identity and more. If you can't find a therapist widen your search, as long as a therapist is licensed in your state they can see you via telehealth.	https://www.therapyforlatinx.com/images/Book-your-first-therapy-session-with-a-latinx-therapist.png
1	Mental Health can be challenging, Finding a Therapist shouldn't be	For years mental health has been stigmatized in our community and sometimes going to therapy with someone who didn't understand our culture left us feeling even worse than when we started. Think of this website as a Yelp for therapists that look and talk like you. They might have even grown up in your neighborhood.	https://www.therapyforlatinx.com/images/Find-an-afro-latinx-therapists.png
4	Don't Give Up	Making your mental health a priority can be challenging in different ways. Emotionally, financially, and even socially it can have you finally having conversations with certain people or having clarity on boundaries for the first time. Keep at it, your future self will thank you for it. Celebrate the wins no matter how small, write down your thoughts after your session, and remember to drink more water.	https://www.therapyforlatinx.com/images/find-a-latinx-therapist.png
3	Reach Out	Finding a therapist is a lot like starting any new relationship, you can't just swipe right for the perfect match (although hopefully that will be a thing one day) You have to message them or give them a call. They most likely will not answer, don't get discouraged. More than likely they are in session, leave a voicemail with your name and number so they can give you a call back.	https://www.therapyforlatinx.com/images/Find-couples-therapy.png
\.


--
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: tpl522_2
--

COPY public.migrations (id, name, run_on) FROM stdin;
\.


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: tpl522_2
--

COPY public.posts (id, date, question, post, user_id) FROM stdin;
1	11/19/2022	I feel good	This is a test post response.	2
2	11/19/2022	Test 2	This is a second test	2
3	11/19/2022	Test 3	This is a third test	2
4	2022-11-21	Good	Testing	2
5	2022-11-21	Good	Today was a tough day. 	2
\.


--
-- Data for Name: resourcesnumbers; Type: TABLE DATA; Schema: public; Owner: tpl522_2
--

COPY public.resourcesnumbers (image, name, phone, website, note, id) FROM stdin;
https://adelbkorkorfoundation.org/wp-content/uploads/2021/06/ok2text-300x97.jpg	OK2Talk Helpline Teen Helpline	1 (800) 273-TALK	https://ok2talk.org/	\N	1
https://adelbkorkorfoundation.org/wp-content/uploads/2022/07/988-logo-296x300.png	988 Suicide & Crisis Lifeline	988	https://988lifeline.org/chat/	\N	2
https://adelbkorkorfoundation.org/wp-content/uploads/2021/06/National-Domestic-Violence-Hotline-300x288.jpg	National Domestic Violence Hotline	1-800-799-SAFE (7233)	https://www.thehotline.org/#	\N	3
https://adelbkorkorfoundation.org/wp-content/uploads/2021/06/Veterans-Crisis-Line-300x106.jpg	Veterans Crisis Line	1-800-273-8255 and Press 1	https://www.veteranscrisisline.net/get-help/chat	\N	4
https://adelbkorkorfoundation.org/wp-content/uploads/2021/06/SAMHSA-300x101.png	Substance Abuse and Mental Health Services Administration(SAMHSA)	1-800-662-HELP (4357)	https://www.samhsa.gov/find-help/national-helpline	\N	5
https://adelbkorkorfoundation.org/wp-content/uploads/2021/08/MHA-300x93.png	Mental Health Screen	\N	https://screening.mhanational.org/screening-tools/?ref=55050	\N	6
https://adelbkorkorfoundation.org/wp-content/uploads/2021/12/Surgeon-General-Report-300x300.png	U.S. Surgeon General’s Advisory Report on\nProtecting Youth Mental Health	\N	https://www.hhs.gov/sites/default/files/surgeon-general-youth-mental-health-advisory.pdf	\N	7
https://adelbkorkorfoundation.org/wp-content/uploads/2021/06/Crisis-Text-Line-300x91.png	Crisis Text Line	Text HOME  to 741741	https://www.crisistextline.org/	Text HOME to 741741 from anywhere in the United States, anytime. Crisis Text Line is here for any crisis. A live, trained Crisis Counselor receives the text and responds, all from our secure online platform. The volunteer Crisis Counselor will help you move from a hot moment to a cool moment.	8
https://www.therapyforlatinx.com/images/rainn.jpeg	National Sexual Assault Hotline	English: 1-800-656-4673	https://www.rainn.org/	When you call 800-656-HOPE (4673), you’ll be routed to a local RAINN affiliate organization based on the first six digits of your phone number. Cell phone callers have the option to enter the ZIP code of their current location to more accurately locate the nearest sexual assault service, provider.	10
https://www.therapyforlatinx.com/images/National-suicide-hotline.png	National Suicide Prevention Lifeline	English: 1-800-273-8255\nSpanish: 1-888-628-9454	https://www.suicidepreventionlifeline.org/	We can all help prevent suicide. The Lifeline provides 24/7, free and confidential support for people in distress, prevention and crisis resources for you or your loved ones, and best practices for professionals.	11
https://www.therapyforlatinx.com/images/SASS.jpg	SASS Crisis & Support Line	English: 1-844-404-7277 (toll-free)\nSpanish: 1-800-788-4727 (toll-free)	https://www.sass-lane.org/	Crisis and support lines are available 24 hours a day to those who have recently experienced a sexual assault, survivors of past sexual violence, and for friends, families or partners of those victimized by sexual assault or abuse. Information and referrals to Lane County resources, counselors and attorneys are available by calling this line.	12
https://www.therapyforlatinx.com/images/Translifeline.jpg	Trans Lifeline	English: 877-565-8860\n\nSpanish: 877-565-8860  oprime 2	https://www.translifeline.org/	Trans Lifeline is a national trans-led organization dedicated to improving the quality of trans lives by responding to the critical needs of our community with direct service, material support, advocacy, and education. Our vision is to fight the epidemic of trans suicide and improve overall life-outcomes of trans people by facilitating justice-oriented, collective community aid.	13
https://www.therapyforlatinx.com/images/trevor.jpg	The Trevor Project	\N	https://www.thetrevorproject.org/	The Trevor Project is the leading national organization providing crisis intervention and suicide prevention services to lesbian, gay, bisexual, transgender, queer & questioning youth.\n\nTrevorLifeline — A crisis intervention and suicide prevention phone service available 24/7 at 1-866-488-7386\n\nTrevorText — Text “START” to 678678. Standard text messaging rates apply. Available 7 Days A Week, (6am–1am ET/3am–10pm PT).	14
https://www.therapyforlatinx.com/images/1in6.png	1 in 6	\N	https://1in6.org/	This free and anonymous helpline is available 24/7, for men who’ve experienced sexual abuse or assault and for those who care about them.\n\nIf you’re not an adult male, but you’re looking for support regarding an experience with sexual abuse or assault, visit rainn.org.\n	9
\.


--
-- Data for Name: user_favorites; Type: TABLE DATA; Schema: public; Owner: tpl522_2
--

COPY public.user_favorites (id, user_id, video_id, title, thumbnails) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: tpl522_2
--

COPY public.users (lastname, firstname, email, sub, id) FROM stdin;
test1	(310)123-4567	\N	English	1
Briseno	Joslyn	jbriseno1013@gmail.com	google-oauth2|114470412835078254308	2
Briseno	Joslyn	jbriseno@ucdavis.edu	google-oauth2|116669293470467237585	3
\.


--
-- Data for Name: videodetails; Type: TABLE DATA; Schema: public; Owner: tpl522_2
--

COPY public.videodetails (id, "channelId", "videoId") FROM stdin;
\.


--
-- Name: appdescription_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_2
--

SELECT pg_catalog.setval('public.appdescription_id_seq', 4, true);


--
-- Name: books_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_2
--

SELECT pg_catalog.setval('public.books_id_seq', 6, true);


--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_2
--

SELECT pg_catalog.setval('public.migrations_id_seq', 1, false);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_2
--

SELECT pg_catalog.setval('public.posts_id_seq', 5, true);


--
-- Name: resourcesnumbers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_2
--

SELECT pg_catalog.setval('public.resourcesnumbers_id_seq', 15, true);


--
-- Name: user_favorites_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_2
--

SELECT pg_catalog.setval('public.user_favorites_id_seq', 3, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_2
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- Name: videodetails_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_2
--

SELECT pg_catalog.setval('public.videodetails_id_seq', 1, false);


--
-- Name: videos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tpl522_2
--

SELECT pg_catalog.setval('public.videos_id_seq', 50, true);


--
-- Name: landingpagecontent appdescription_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_2
--

ALTER TABLE ONLY public.landingpagecontent
    ADD CONSTRAINT appdescription_pkey PRIMARY KEY (id);


--
-- Name: books books_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_2
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id);


--
-- Name: migrations migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_2
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_2
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- Name: resourcesnumbers resourcesnumbers_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_2
--

ALTER TABLE ONLY public.resourcesnumbers
    ADD CONSTRAINT resourcesnumbers_pkey PRIMARY KEY (id);


--
-- Name: user_favorites user_favorites_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_2
--

ALTER TABLE ONLY public.user_favorites
    ADD CONSTRAINT user_favorites_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_2
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: videodetails videodetails_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_2
--

ALTER TABLE ONLY public.videodetails
    ADD CONSTRAINT videodetails_pkey PRIMARY KEY (id);


--
-- Name: favvideos videos_pkey; Type: CONSTRAINT; Schema: public; Owner: tpl522_2
--

ALTER TABLE ONLY public.favvideos
    ADD CONSTRAINT videos_pkey PRIMARY KEY (id);


--
-- Name: posts posts_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl522_2
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: user_favorites user_favorites_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl522_2
--

ALTER TABLE ONLY public.user_favorites
    ADD CONSTRAINT user_favorites_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: user_favorites user_favorites_video_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl522_2
--

ALTER TABLE ONLY public.user_favorites
    ADD CONSTRAINT user_favorites_video_id_fkey FOREIGN KEY (video_id) REFERENCES public.favvideos(id);


--
-- Name: favvideos videos_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tpl522_2
--

ALTER TABLE ONLY public.favvideos
    ADD CONSTRAINT videos_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

