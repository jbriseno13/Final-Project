/* Replace with your SQL commands */


CREATE TABLE public.resourcesnumbers (
    id SERIAL PRIMARY KEY,
    image text,
    name text,
    phone text,
    website text,
    note text
);

CREATE TABLE public.users (
    id SERIAL PRIMARY KEY,
    lastname text,
    firstname text,
    email text,
    sub text,
    id integer DEFAULT nextval('public.users_id_seq'::regclass) NOT NULL
);




INSERT INTO public.resourcesnumbers (id, image, name, phone, website, note) OVERRIDING SYSTEM VALUE VALUES (2, 'https://adelbkorkorfoundation.org/wp-content/uploads/2021/06/ok2text-300x97.jpg', 'OK2Talk Helpline Teen Helpline', '1 (800) 273-TALK', 'https://ok2talk.org/', NULL);
INSERT INTO public.resourcesnumbers (id, image, name, phone, website, note) OVERRIDING SYSTEM VALUE VALUES (3, 'https://adelbkorkorfoundation.org/wp-content/uploads/2022/07/988-logo-296x300.png', '988 Suicide & Crisis Lifeline', '988', 'https://988lifeline.org/chat/', NULL);
INSERT INTO public.resourcesnumbers (id, image, name, phone, website, note) OVERRIDING SYSTEM VALUE VALUES (4, 'https://adelbkorkorfoundation.org/wp-content/uploads/2021/06/National-Domestic-Violence-Hotline-300x288.jpg', 'National Domestic Violence Hotline', '1-800-799-SAFE (7233)', 'https://www.thehotline.org/#', NULL);
INSERT INTO public.resourcesnumbers (id, image, name, phone, website, note) OVERRIDING SYSTEM VALUE VALUES (5, 'https://adelbkorkorfoundation.org/wp-content/uploads/2021/06/Veterans-Crisis-Line-300x106.jpg', 'Veterans Crisis Line', '1-800-273-8255 and Press 1', 'https://www.veteranscrisisline.net/get-help/chat', NULL);
INSERT INTO public.resourcesnumbers (id, image, name, phone, website, note) OVERRIDING SYSTEM VALUE VALUES (6, 'https://adelbkorkorfoundation.org/wp-content/uploads/2021/06/SAMHSA-300x101.png', 'Substance Abuse and Mental Health Services Administration(SAMHSA)', '1-800-662-HELP (4357)', 'https://www.samhsa.gov/find-help/national-helpline', NULL);
INSERT INTO public.resourcesnumbers (id, image, name, phone, website, note) OVERRIDING SYSTEM VALUE VALUES (7, 'https://adelbkorkorfoundation.org/wp-content/uploads/2021/08/MHA-300x93.png', 'Mental Health Screen', NULL, 'https://screening.mhanational.org/screening-tools/?ref=55050', NULL);
INSERT INTO public.resourcesnumbers (id, image, name, phone, website, note) OVERRIDING SYSTEM VALUE VALUES (8, 'https://adelbkorkorfoundation.org/wp-content/uploads/2021/12/Surgeon-General-Report-300x300.png', 'U.S. Surgeon General’s Advisory Report on
Protecting Youth Mental Health', NULL, 'https://www.hhs.gov/sites/default/files/surgeon-general-youth-mental-health-advisory.pdf', NULL);
INSERT INTO public.resourcesnumbers (id, image, name, phone, website, note) OVERRIDING SYSTEM VALUE VALUES (1, 'https://adelbkorkorfoundation.org/wp-content/uploads/2021/06/Crisis-Text-Line-300x91.png', 'Crisis Text Line', 'Text HOME  to 741741', 'https://www.crisistextline.org/', 'Text HOME to 741741 from anywhere in the United States, anytime. Crisis Text Line is here for any crisis. A live, trained Crisis Counselor receives the text and responds, all from our secure online platform. The volunteer Crisis Counselor will help you move from a hot moment to a cool moment.');
INSERT INTO public.resourcesnumbers (id, image, name, phone, website, note) OVERRIDING SYSTEM VALUE VALUES (9, 'https://www.therapyforlatinx.com/images/1in6.png', '1 in 6', NULL, 'https://1in6.org/', 'This free and anonymous helpline is available 24/7, for men who’ve experienced sexual abuse or assault and for those who care about them.

If you’re not an adult male, but you’re looking for support regarding an experience with sexual abuse or assault, visit rainn.org.

Please note that there can sometimes be a long wait to speak with a specialist (who may be any gender), especially if you are attempting to sign onto the service late at night or early in the morning when we receive a high volume of chat requests. Do not close the waiting room window or you will lose your place in line.');
INSERT INTO public.resourcesnumbers (id, image, name, phone, website, note) OVERRIDING SYSTEM VALUE VALUES (10, 'https://www.therapyforlatinx.com/images/rainn.jpeg', 'National Sexual Assault Hotline', 'English: 1-800-656-4673', 'https://www.rainn.org/', 'When you call 800-656-HOPE (4673), you’ll be routed to a local RAINN affiliate organization based on the first six digits of your phone number. Cell phone callers have the option to enter the ZIP code of their current location to more accurately locate the nearest sexual assault service, provider.');
INSERT INTO public.resourcesnumbers (id, image, name, phone, website, note) OVERRIDING SYSTEM VALUE VALUES (11, 'https://www.therapyforlatinx.com/images/National-suicide-hotline.png', 'National Suicide Prevention Lifeline', 'English: 1-800-273-8255
Spanish: 1-888-628-9454', 'https://www.suicidepreventionlifeline.org/', 'We can all help prevent suicide. The Lifeline provides 24/7, free and confidential support for people in distress, prevention and crisis resources for you or your loved ones, and best practices for professionals.');
INSERT INTO public.resourcesnumbers (id, image, name, phone, website, note) OVERRIDING SYSTEM VALUE VALUES (12, 'https://www.therapyforlatinx.com/images/SASS.jpg', 'SASS Crisis & Support Line', 'English: 1-844-404-7277 (toll-free)
Spanish: 1-800-788-4727 (toll-free)', 'https://www.sass-lane.org/', 'Crisis and support lines are available 24 hours a day to those who have recently experienced a sexual assault, survivors of past sexual violence, and for friends, families or partners of those victimized by sexual assault or abuse. Information and referrals to Lane County resources, counselors and attorneys are available by calling this line.');
INSERT INTO public.resourcesnumbers (id, image, name, phone, website, note) OVERRIDING SYSTEM VALUE VALUES (13, 'https://www.therapyforlatinx.com/images/Translifeline.jpg', 'Trans Lifeline', 'English: 877-565-8860

Spanish: 877-565-8860  oprime 2', 'https://www.translifeline.org/', 'Trans Lifeline is a national trans-led organization dedicated to improving the quality of trans lives by responding to the critical needs of our community with direct service, material support, advocacy, and education. Our vision is to fight the epidemic of trans suicide and improve overall life-outcomes of trans people by facilitating justice-oriented, collective community aid.');
INSERT INTO public.resourcesnumbers (id, image, name, phone, website, note) OVERRIDING SYSTEM VALUE VALUES (14, 'https://www.therapyforlatinx.com/images/trevor.jpg', 'The Trevor Project', NULL, 'https://www.thetrevorproject.org/', 'The Trevor Project is the leading national organization providing crisis intervention and suicide prevention services to lesbian, gay, bisexual, transgender, queer & questioning youth.

TrevorLifeline — A crisis intervention and suicide prevention phone service available 24/7 at 1-866-488-7386

TrevorText — Text “START” to 678678. Standard text messaging rates apply. Available 7 Days A Week, (6am–1am ET/3am–10pm PT).');
INSERT INTO public.resourcesnumbers (id, image, name, phone, website, note) OVERRIDING SYSTEM VALUE VALUES (15, NULL, NULL, NULL, NULL, NULL);



SELECT pg_catalog.setval('public.resourcesnumbers_id_seq', 15, true);
