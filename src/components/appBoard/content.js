import React from 'react';
import '../../css/content.css';
import SwipeCard from '../swipeCard/swipecard.js';
import Team from '../member/team';
import StickyFooter from '../footer/footer';
// import backStyle from '../../css/stylesjs/background';

export default function Board() {
    // const background = backStyle();

    // className={background.root}

    return (
        <div id='main-body'>
            <div id='top-gradient' />
            <image id='web' />
            <h2 id='title'>About Koi</h2>
            <p id='title-text'>Koi brings back personal ownership, rewarding creators for quality through the revolutionary attention economy.</p>
            <div id='what-koi'>
                <h3>What is Koi?</h3>
                <p className='text-small'>Koi is a new ecosystem and economy based on attention. The ecosystem comprises three main parts:
                        <div>
                        <button id='ellipse-181'>Creators</button>
                        <button id='ellipse-182'>Node Agents</button>
                        <button id='ellipse-183'>Developers</button>
                    </div>
                        To keep the ecosystem thriving, KOI tokens are systematically exchanged between different participants.
                    </p>
            </div>

            {/* These do not want to work correctly, will need to reassess */}
            <div id='group-246'>
                <div id='ellipse-176' className='circle'>
                    <p>Registor your NFT!</p>
                    <label>creators</label>
                </div>
                <div id='ellipse-177' className='circle'>
                    <p>Run a node!</p>
                    <label>operators</label>
                </div>
                <div id='ellipse-178' className='circle'>
                    <p>Get started with the SDK</p>
                    <label>devs</label>
                </div>
            </div>

            {/* Middle section */}

            <div id='mid-attention'>
                <p className='text-small'>
                    The future of the internet is quality content freely available to anyone,
                    not stuck behind paywalls or unskippable ads,
                    and where already-wealthy companies aren’t profiting from your personal data.
                    </p>
                <h3><strong>Attention is valuable, we have to treat it that way.</strong></h3>
            </div>

            <div>
                <div id='mission'>
                    <h3>Our Mission</h3>
                    <p className='text-small'>our mission is two-fold:</p>
                </div>

                {/* ----------------------------------- */}

                {/* <div id='mission-ops'> */}
                <div id='miss1'>
                    <button id='lower-177' className='circle'></button>
                    <h3 id='ops-text-one'>Create and ensure universal, equitable access to quality information</h3>
                </div>


                <div id='miss2'>
                    <button id='ellipse-184' className='circle'></button>
                    <h3 id='ops-text-two'>Reward creators directly for the content they produce</h3>
                </div>
                {/* </div> */}

                {/* ----------------------------- */}
            </div>


            <div>
                <div id='resources'>
                    <p className='text-small'>
                        When people have access to resources, they can create, innovate, and change the world.
                        This kind of transformation should be available to more than just those who can afford to pay for it,
                        unfairly skewing progress towards wealthy countries.
                    </p>
                </div>

                {/* ----------------------------- */}

                <div id='special'>
                    <em id='special-font'>“Koi is making a better world and I love being a part of that [temporary].”</em>
                </div>

                {/* ----------------------------- */}

                <div id='access'>
                    <p className='text-small'>
                        This lack of access to resources is amplified in the creator space too.
                        When you take a beautiful photo and it goes viral on social media, the platform makes money off your work, not you— and they own it, too.
                        Artists and other creators are criminally taken advantage of because they love what they do.
                        You should earn the rewards for all your hard work and creativity.
                    </p>
                </div>
            </div>

            {/* Starting lower middle section */}

            <div>

                <div id='value'>
                    <h3>We Value...</h3>
                    <p className='text-small'>At Koi, we strive to embody our values and build products around them.</p>
                </div>

                {/* ----------------------------- */}
                <div>
                    <div id='ellipse-206-location'>
                        <button className='circle' id='ellipse-206'></button>
                        <h4>Openness</h4>
                    </div>
                    <div id='ellipse-201'>
                        <button className='circle'></button>
                        <h4>Accessibility</h4>
                    </div>
                    <div id='ellipse-202'>
                        <button className='circle'></button>
                        <h4>Sustainability</h4>
                    </div>
                </div>

                {/* ----------------------------- */}
                <div id='bottom'>
                    <div id='swipe-card'>
                        <SwipeCard />
                    </div>

                    {/* ----------------------------- */}

                    <div id='create-card'>
                        <p className='text-small'>
                            We’ve become so used to “free” stuff on the internet that we (our data) have become the product.
                            In this model creators lose out, sometimes pursuing other careers because creating isn’t not sustainable in the long term.
                    <strong> We want to help creators get paid for their work, and allow them to keep making more work that people love.</strong>
                        </p>
                    </div>

                    {/* ----------------------------- */}

                </div>
                <div>
                    <div id='green-card'>
                        <p className='text-small'>
                            If you notice a way in which we could be doing a better job at embodying and promoting these values, please reach out to us.
                            We are always looking for feedback on our blindspots.
                    </p>
                        <button className="button-purple" href='mailto:hello@openkoi.com'>Get in Touch</button>
                    </div>

                    <div>
                        <Team />
                    </div>


                </div>
                <div id='join-footer'>
                    <div id='join'>
                        <p className='text-small'>
                            <strong>Want to join the team?</strong>
                Email your resume and a few words about why you love Koi and would be a great addition to our team to <a href='mailto:jobs@openkoi.com'>jobs@openkoi.com</a>.</p>
                        <button className="button-purple" href='mailto:jobs@openkoi.com'>Apply</button>
                    </div>
                </div>
                <StickyFooter />
            </div>
        </div>

    )
}