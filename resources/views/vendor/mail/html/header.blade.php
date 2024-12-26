@props(['url'])
<tr>
<td class="header">
<a href="{{ $url }}" style="display: inline-block;">
@if (trim($slot) === 'Laravel')
{{-- <img src="http://localhost:8000/logo.png" class="logo" alt="Winnicode Logo"> --}}
@else
{{ $slot }}
@endif
</a>
</td>
</tr>
