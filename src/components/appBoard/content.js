import React from 'react';
import backStyle from './background';

export default function Board() {
    const background = backStyle();

    return (
        <div className={background.root}>
            <div>
                <h2>About Koi</h2>
                <p>Koi brings back personal ownership, rewarding creators for quality through the revolutionary attention economy.</p>
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
                    <button>creators</button>
                </div>
                <div>
                    <p>Run a node!</p>
                    <button>operators</button>
                </div>
                <div>
                    <p>Get start with the SDK</p>
                    <button>devs</button>
                </div>
            </div>
            <div>
                <p>
                    The future of the internet is quality content freely available to anyone, 
                    not stuck behind paywalls or unskippable ads, 
                    and where already-wealthy companies aren’t profiting from your personal data.
                </p>
                <h3><strong>Attention is valuable, we have to treat it that way.</strong></h3>
            </div>
        </div>
    )
}