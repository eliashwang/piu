import React from 'react';

import{
    LastTweets
} from './styles';

import PageHeader from '../../components/PageHeader';
import ComponentShareTweet from '../../components/ContainerShareTweet';
import LastTweetsHeader from '../../components/LastTweetsHeader';
import ContainerLastTweet from '../../components/ContainerLastTweet';

function Feed(){
    return(
        <div className="feed">
            <PageHeader/>
            <ComponentShareTweet/>
            <LastTweets>
                <LastTweetsHeader/>
                <ContainerLastTweet/>
            </LastTweets>
        </div>
    );
}

export default Feed;