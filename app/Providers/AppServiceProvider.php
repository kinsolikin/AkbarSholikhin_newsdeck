<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Support\Facades\Vite;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void


    {
        

        VerifyEmail::toMailUsing(function (object $notifiable, string $url) {
            return (new MailMessage)
                ->subject('Verifikasi Email NewsDeck')
                ->line('Silahkan Click tombol verifikasi untuk melakukan verifikasi acount NewsDeck')
                ->action('Verifikasi Email', $url)
                ->salutation('Hormat Kami, NewsDeck');
                
        });
        // ResetPassword::toMailUsing(function (object $notifiable, string $url) {
        //     return (new MailMessage)
        //         ->subject('Reset Password Account NewsDeck')
        //         ->line('Silahkan Click tombol reset password untuk mereset password NewsDeck anda')
        //         ->salutation('Hormat Kami, NewsDeck');
                
        // });
    }
}
