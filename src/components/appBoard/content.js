import React from 'react';
import backStyle from '../../css/stylesjs/background';
import contentStyle from '../../css/stylesjs/contentCss';

export default function Board() {
    const background = backStyle();
    const style = contentStyle();

    return (
        <div className={background.root}>
            <div>
                <div className='top'>
                    <h2 className={style.title}>About Koi</h2>
                    <p className={style.titleDescrip}>Koi brings back personal ownership, rewarding creators for quality through the revolutionary attention economy.</p>
                </div>
                <div>
                    <h3>What is Koi?</h3>
                    <p>Koi is a new ecosystem and economy based on attention. The ecosystem comprises three main parts:
                        <li>
                            <ul>Creators</ul>
                            <ul>Node Agents</ul>
                            <ul>Developers</ul>
                        </li>
                        To keep the ecosystem thriving, KOI tokens are systematically exchanged between different participants.
                    </p>
                </div>
                <div>
                    <div>
                        <p>Registor your NFT!</p>
                        <button className={style.circles}>creators</button>
                    </div>
                    <div>
                        <p>Run a node!</p>
                        <button className={style.circles}>operators</button>
                    </div>
                    <div>
                        <p>Get start with the SDK</p>
                        <button className={style.circles}>devs</button>
                    </div>
                </div>
            </div>
            <div className='mid'>
                <div>
                    <p>
                        The future of the internet is quality content freely available to anyone,
                        not stuck behind paywalls or unskippable ads,
                        and where already-wealthy companies aren’t profiting from your personal data.
                    </p>
                    <h3><strong>Attention is valuable, we have to treat it that way.</strong></h3>
                </div>
                <div>
                    <h3>Our Mission</h3>
                    <p>our mission is two-fold:</p>
                </div>
                <div>
                    <div>
                        <image className={style.circles}/>
                        <h3>Create and ensure universal, equitable access to quality information</h3>
                    </div>
                    <div>
                        <image className={style.circles}/>
                        <h3>Reward creators directly for the content they produce</h3>
                    </div>
                </div>
                <div>
                    <p>
                        When people have access to resources, they can create, innovate, and change the world.
                        This kind of transformation should be available to more than just those who can afford to pay for it,
                        unfairly skewing progress towards wealthy countries.
                    </p>
                </div>
                <div>
                    <em>“Koi is making a better world and I love being a part of that [temporary].”</em>
                </div>
                <div>
                    <p>
                        This lack of access to resources is amplified in the creator space too.
                        When you take a beautiful photo and it goes viral on social media, the platform makes money off your work, not you— and they own it, too.
                        Artists and other creators are criminally taken advantage of because they love what they do.
                        You should earn the rewards for all your hard work and creativity.
                    </p>
                </div>
                <div>
                    <h3>We Value...</h3>
                    <p>At Koi, we strive to embody our values and build products around them.</p>
                </div>
                <div>
                    <div>
                        <image />
                        <h4>Openness</h4>
                    </div>
                    <div>
                        <image />
                        <h4>Accessibility</h4>
                    </div>
                    <div>
                        <image />
                        <h4>Sustainability</h4>
                    </div>
                </div>
                <div className='swipeCard'>
                    placeholder for swipecard location
                </div>
                <div>
                    <p>
                    We’ve become so used to “free” stuff on the internet that we (our data) have become the product. 
                    In this model creators lose out, sometimes pursuing other careers because creating isn’t not sustainable in the long term. 
                    <strong> We want to help creators get paid for their work, and allow them to keep making more work that people love.</strong>
                    </p>
                </div>
                <div className='green card'>
                    <p>
                    If you notice a way in which we could be doing a better job at embodying and promoting these values, please reach out to us. 
                    We are always looking for feedback on our blindspots.
                    </p>
                    <button href='mailto:hello@openkoi.com'>Get in Touch</button>
                </div>
            </div>
            <div className='teamCard'>
                <h3>The Koi Team</h3>
                <div>
                    <image className={style.circles}/>
                    <h5>Placeholder</h5>
                    <p>Placeholder</p>
                </div>
                <div className='join'>
                <p>
                <strong>Want to join the team?</strong> 
                Email your resume and a few words about why you love Koi and would be a great addition to our team to <a href='mailto:jobs@openkoi.com'>jobs@openkoi.com</a>.</p>
                <button href='mailto:jobs@openkoi.com'>Apply</button>
                </div>
            </div>
            <div className='footer'>
                <h1>Placeholder</h1>
            </div>
        </div>
    )
}