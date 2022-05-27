import { Link } from 'solid-app-router';
import type { Component } from 'solid-js';
import { Title } from 'solid-meta';

import styles from '@styles/About.module.scss';

const About: Component = () => {
    return (
        <div class="container">
            <Title>About this site</Title>
            <h1 class="title">About</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                temporibus fugit eligendi earum animi, culpa nihil atque eius
                neque cum molestiae ratione eos id quibusdam suscipit
                accusantium laborum fugiat mollitia? Ducimus minima eius
                praesentium alias perspiciatis modi dolores similique commodi
                aspernatur ipsam nihil, debitis libero iste accusantium voluptas
                quam voluptate quas quibusdam esse enim! Amet possimus
                praesentium quis ad harum? Enim ducimus dolore cumque optio
                unde! Ut cupiditate doloremque, alias accusamus molestiae a
                animi distinctio officiis id, natus incidunt? Quibusdam nobis,
                cupiditate dolorem labore laborum quaerat magnam quo consequatur
                amet. At et, dolores suscipit quas adipisci earum doloribus
                fuga? Nostrum inventore deserunt obcaecati perferendis similique
                saepe tempora necessitatibus ea! Officiis quo porro ut, enim
                nisi repudiandae sed incidunt veniam perspiciatis. Est, ipsa
                atque laboriosam quidem necessitatibus tempore vitae porro
                obcaecati sit accusamus eligendi eveniet debitis! Quidem enim
                consequatur corporis, qui reprehenderit quasi excepturi earum
                ipsam fuga mollitia natus accusamus quam.
            </p>
            <Link href="/" class={`link ${styles.link}`}>
                Home
            </Link>
        </div>
    );
};

export default About;
