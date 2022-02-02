import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import { useRouter } from 'next/router';
import React from 'react';
import appConfig from '../config.json';

function Title(props) {
    const Tag = props.tag || 'h1';

    return (
        <>
            <Tag>{props.children}</Tag>

            <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['200']};
                font-size: 40px;
                font-weight: 700;
            }
            `}</style>
        </>
    );
}

export default function HomePage() {
    const [username, setUsername] = React.useState('rodrigocbarj');
    const routing = useRouter();

    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.primary[500],
                    backgroundImage: 'url(https://i.giphy.com/media/AOSwwqVjNZlDO/giphy.webp)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.neutrals[1100],
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        onSubmit={function(event) {
                            event.preventDefault();
                            // window.location.href = '/chat';
                            routing.push(`/chat?username=${username}`);
                        }}
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '10px',
                        }}
                    >
                        
                        <Text variant="body1" styleSheet={{ 
                            marginBottom: '10px',
                            color: appConfig.theme.colors.primary[400],
                                }}>
                            {appConfig.name}
                        </Text>
                        
                        <Title tag="h2">{username}, boas vindas de volta! 👩‍💻</Title>
                            
                        <Text variant="body3" styleSheet={{ 
                                marginBottom: '5px',
                                marginTop: '30px',
                                color: appConfig.theme.colors.neutrals[200],
                                }}>
                            Insira seu usuário do GitHub
                        </Text>

                        <TextField
                            value={username}
                            onChange={function(event) {
                                // Valor inputado:
                                const value = event.target.value;
                                // Trocar o valor (pelo React) em:
                                setUsername(value);
                            }}
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.primary[500],
                                    backgroundColor: appConfig.theme.colors.neutrals[800],
                                },
                            }}
                        />
                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary[500],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary[600],
                            }}
                        />
                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: appConfig.theme.colors.neutrals[1000],
                            border: '1px solid',
                            borderColor: appConfig.theme.colors.neutrals[999],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}
                            src={`https://github.com/${username}.png`}
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[200],
                                backgroundColor: appConfig.theme.colors.neutrals[900],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                        >
                            {username}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}