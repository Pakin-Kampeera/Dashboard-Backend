const mailgun = require('mailgun-js');

const sendResetPassword = (options) => {
  const mg = mailgun({ apiKey: process.env.MAILGUN_APIKEY, domain: process.env.MAILGUN_DOMAIN });
  const message = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml"
    xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
    <!--[if gte mso 9]><xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml><![endif]-->
    <title>meowgun</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0 " />
    <meta name="format-detection" content="telephone=no"/>
    <!--[if !mso]><!-->
    <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,700,700i,900,900i" rel="stylesheet" />
    <!--<![endif]-->
    <style type="text/css">
    body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: 100% !important;
      -ms-text-size-adjust: 100% !important;
      -webkit-font-smoothing: antialiased !important;
    }
    img {
      border: 0 !important;
      outline: none !important;
    }
    p {
      Margin: 0px !important;
      Padding: 0px !important;
    }
    table {
      border-collapse: collapse;
      mso-table-lspace: 0px;
      mso-table-rspace: 0px;
    }
    td, a, span {
      border-collapse: collapse;
      mso-line-height-rule: exactly;
    }
    .ExternalClass * {
      line-height: 100%;
    }
    .em_blue a {text-decoration:none; color:#264780;}
    .em_grey a {text-decoration:none; color:#434343;}
    .em_white a {text-decoration:none; color:#ffffff;}
    
    @media only screen and (min-width:481px) and (max-width:649px) {
    .em_main_table {width: 100% !important;}
    .em_wrapper{width: 100% !important;}
    .em_hide{display:none !important;}
    .em_aside10{padding:0px 10px !important;}
    .em_h20{height:20px !important; font-size: 1px!important; line-height: 1px!important;}
    .em_h10{height:10px !important; font-size: 1px!important; line-height: 1px!important;}
    .em_aside5{padding:0px 10px !important;}
    .em_ptop2 { padding-top:8px !important; }
    }
    @media only screen and (min-width:375px) and (max-width:480px) {
    .em_main_table {width: 100% !important;}
    .em_wrapper{width: 100% !important;}
    .em_hide{display:none !important;}
    .em_aside10{padding:0px 10px !important;}
    .em_aside5{padding:0px 8px !important;}
    .em_h20{height:20px !important; font-size: 1px!important; line-height: 1px!important;}
    .em_h10{height:10px !important; font-size: 1px!important; line-height: 1px!important;}
    .em_font_11 {font-size: 12px !important;}
    .em_font_22 {font-size: 22px !important; line-height:25px !important;}
    .em_w5 { width:7px !important; }
    .em_w150 { width:150px !important; height:auto !important; }
    .em_ptop2 { padding-top:8px !important; }
    u + .em_body .em_full_wrap { width:100% !important; width:100vw !important;}
    }
    @media only screen and (max-width:374px) {
    .em_main_table {width: 100% !important;}
    .em_wrapper{width: 100% !important;}
    .em_hide{display:none !important;}
    .em_aside10{padding:0px 10px !important;}
    .em_aside5{padding:0px 8px !important;}
    .em_h20{height:20px !important; font-size: 1px!important; line-height: 1px!important;}
    .em_h10{height:10px !important; font-size: 1px!important; line-height: 1px!important;}
    .em_font_11 {font-size: 11px !important;}
    .em_font_22 {font-size: 22px !important; line-height:25px !important;}
    .em_w5 { width:5px !important; }
    .em_w150 { width:150px !important; height:auto !important; }
    .em_ptop2 { padding-top:8px !important; }
    u + .em_body .em_full_wrap { width:100% !important; width:100vw !important;}
    }
    </style>
    
    </head>
    <body class="em_body" style="margin:0px auto; padding:0px;" bgcolor="#efefef">
    <table width="100%" border="0" cellspacing="0" cellpadding="0" class="em_full_wrap" align="center" bgcolor="#efefef">
        <tr>
          <td align="center" valign="top" class="em_aside5"><table align="center" width="650" border="0" cellspacing="0" cellpadding="0" class="em_main_table" style="width:650px; table-layout:fixed;">
              <tr>
                <td align="center" valign="top" style="padding:0 25px; background-color:#ffffff;" class="em_aside10"><table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
                  <tr>
                    <td height="45" style="height:45px;" class="em_h20">&nbsp;</td>
                  </tr>
                  <tr>
                    <td class="em_blue em_font_22" align="center" valign="top" style="font-family: Arial, sans-serif; font-size: 26px; line-height: 29px; color:#264780; font-weight:bold;">Forgot your password?</td>
                  </tr>
                  <tr>
                    <td height="14" style="height:14px; font-size:0px; line-height:0px;">&nbsp;</td>
                  </tr>
                  <tr>
                    <td class="em_grey" align="center" valign="top" style="font-family: Arial, sans-serif; font-size: 16px; line-height: 26px; color:#434343;">It happens to the best of us. The good news is you can change it&nbsp;right&nbsp;now.</td>
                  </tr>
                  <tr>
                    <td height="26" style="height:26px;" class="em_h20">&nbsp;</td>
                  </tr>
                  <tr>
                    <td align="center" valign="top"><table width="250" style="width:250px; background-color:#6bafb2; border-radius:4px;" border="0" cellspacing="0" cellpadding="0" align="center">
                      <tr>
                        <td class="em_white" height="42" align="center" valign="middle" style="font-family: Arial, sans-serif; font-size: 16px; color:#ffffff; font-weight:bold; height:42px;"><a href=${options.link} target="_blank" style="text-decoration:none; color:#ffffff; line-height:42px; display:block;">RESET YOUR PASSWORD</a></td>
                      </tr>
                    </table>
                    </td>
                  </tr>
                  <tr>
                    <td height="25" style="height:25px;" class="em_h20">&nbsp;</td>
                  </tr>
                  <tr>
                    <td class="em_grey" align="center" valign="top" style="font-family: Arial, sans-serif; font-size: 16px; line-height: 26px; color:#434343;">If you didn&rsquo;t request a password reset, you don&rsquo;t have to do anything.</td>
                  </tr>
                  <tr>
                    <td height="44" style="height:44px;" class="em_h20">&nbsp;</td>
                  </tr>
                </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
    </table>
          </td>
        </tr>
    </table>
    </body>
    </html>`;

  const data = {
    from: `${options.from} ${process.env.MAILGUN_FROM}`,
    to: options.to,
    subject: 'Reset Your Password',
    html: message,
  };

  mg.messages().send(data);
};

const sendVerifiedEmail = (options) => {
  const mg = mailgun({ apiKey: process.env.MAILGUN_APIKEY, domain: process.env.MAILGUN_DOMAIN });
  const message = `<!DOCTYPE html>
      <html style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;">
      <head>
      <meta name="viewport" content="width=device-width" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>Actionable emails e.g. reset password</title>
      
      
      <style type="text/css">
      img {
      max-width: 100%;
      }
      body {
      -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em;
      }
      body {
      background-color: #f6f6f6;
      }
      @media only screen and (max-width: 640px) {
        body {
          padding: 0 !important;
        }
        h1 {
          font-weight: 800 !important; margin: 20px 0 5px !important;
        }
        h2 {
          font-weight: 800 !important; margin: 20px 0 5px !important;
        }
        h3 {
          font-weight: 800 !important; margin: 20px 0 5px !important;
        }
        h4 {
          font-weight: 800 !important; margin: 20px 0 5px !important;
        }
        h1 {
          font-size: 22px !important;
        }
        h2 {
          font-size: 18px !important;
        }
        h3 {
          font-size: 16px !important;
        }
        .container {
          padding: 0 !important; width: 100% !important;
        }
        .content {
          padding: 0 !important;
        }
        .content-wrap {
          padding: 10px !important;
        }
        .invoice {
          width: 100% !important;
        }
      }
      </style>
      </head>
      
      <body itemscope itemtype="http://schema.org/EmailMessage" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; line-height: 1.6em; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6">
      
      <table class="body-wrap" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; background-color: #f6f6f6; margin: 0;" bgcolor="#f6f6f6"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;" valign="top"></td>
          <td class="container" width="600" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto;" valign="top">
            <div class="content" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 20px;">
              <table class="main" width="100%" cellpadding="0" cellspacing="0" itemprop="action" itemscope itemtype="http://schema.org/ConfirmAction" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; border-radius: 3px; background-color: #fff; margin: 0; border: 1px solid #e9e9e9;" bgcolor="#fff"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-wrap" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 20px;" valign="top">
                    <meta itemprop="name" content="Confirm Email" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;" /><table width="100%" cellpadding="0" cellspacing="0" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                          Please confirm your email address by clicking the link below.
                        </td>
                      </tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                          We may need to send you critical information about our service and it is important that we have an accurate email address.
                        </td>
                      </tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" itemprop="handler" itemscope itemtype="http://schema.org/HttpActionHandler" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                          <a href=${options.link} class="btn-primary" itemprop="url" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; color: #FFF; text-decoration: none; line-height: 2em; font-weight: bold; text-align: center; cursor: pointer; display: inline-block; border-radius: 5px; text-transform: capitalize; background-color: #348eda; margin: 0; border-color: #348eda; border-style: solid; border-width: 10px 20px;">Confirm email address</a>
                        </td>
                      </tr><tr style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; margin: 0;"><td class="content-block" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">
                          &mdash; Stress Analysis
                        </td>
                      </tr></table></td>
                </tr></table><div class="footer" style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; width: 100%; clear: both; color: #999; margin: 0; padding: 20px;">
               </div></div>
          </td>
          <td style="font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif; box-sizing: border-box; font-size: 14px; vertical-align: top; margin: 0;" valign="top"></td>
        </tr></table></body>
      </html>`;

  const data = {
    from: `${options.from} ${process.env.MAILGUN_FROM}`,
    to: options.to,
    subject: 'Email Verification',
    html: message,
  };

  mg.messages().send(data);
};

module.exports = { sendResetPassword, sendVerifiedEmail };
