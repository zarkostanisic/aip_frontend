import React, {Component} from 'react';

import {
  FacebookShareButton,
  FacebookIcon,
  EmailShareButton,
  EmailIcon,
  ViberShareButton,
  ViberIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  TelegramShareButton,
  TelegramIcon
} from "react-share";

class ShareButtons extends Component{
  render(){
    return (
      <>
        <FacebookShareButton 
          url={this.props.location}
          title={this.props.title}
          description={this.props.description}
          className="ml-1">
            <FacebookIcon round="true" size="40"></FacebookIcon>
        </FacebookShareButton>
        <EmailShareButton 
          url={this.props.location}
          title={this.props.title}
          description={this.props.description}
          className="ml-1">
            <EmailIcon round="true" size="40"></EmailIcon>
        </EmailShareButton>
        <ViberShareButton 
          url={this.props.location}
          title={this.props.title}
          description={this.props.description}
          className="ml-1">
            <ViberIcon round="true" size="40"></ViberIcon>
        </ViberShareButton>
        <WhatsappShareButton 
          url={this.props.location}
          title={this.props.title}
          description={this.props.description}
          className="ml-1">
            <WhatsappIcon round="true" size="40"></WhatsappIcon>
        </WhatsappShareButton>
        <LinkedinShareButton 
          url={this.props.location}
          title={this.props.title}
          description={this.props.description}
          className="ml-1">
            <LinkedinIcon round="true" size="40"></LinkedinIcon>
        </LinkedinShareButton>
        <TwitterShareButton 
          url={this.props.location}
          title={this.props.title}
          description={this.props.description}
          className="ml-1">
            <TwitterIcon round="true" size="40"></TwitterIcon>
        </TwitterShareButton>
        <TelegramShareButton 
          url={this.props.location}
          title={this.props.title}
          description={this.props.description}
          className="ml-1">
            <TelegramIcon round="true" size="40"></TelegramIcon>
        </TelegramShareButton>
      </>
    );
  }
}

export default ShareButtons;
