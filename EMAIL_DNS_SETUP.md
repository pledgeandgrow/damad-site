# Email DNS Setup: DKIM and DMARC

## Overview
- **DKIM** (DomainKeys Identified Mail): Signs emails with a cryptographic key
- **DMARC** (Domain-based Message Authentication): Policy for email authentication
- **SPF** (Sender Policy Framework): Already configured (check existing records)

## Step 1: Get DKIM Records from Ionos

### In Ionos Control Panel:
1. Log in to **ionos.com**
2. Go to **Domains** → Your domain (`dmd-ascenseur.com`)
3. Click **Email** or **Mail Settings**
4. Look for **DKIM** section
5. You should see:
   - **Selector**: Usually `default` or `ionos`
   - **Public Key**: A long string starting with `v=DKIM1;`

Example DKIM record:
```
default._domainkey.dmd-ascenseur.com TXT v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC...
```

## Step 2: Add DKIM Record to DNS

### In Ionos DNS Manager:
1. Go to **Domains** → `dmd-ascenseur.com` → **DNS Settings**
2. Click **Add Record** or **Create DNS Record**
3. Fill in:
   - **Type**: TXT
   - **Name**: `default._domainkey` (or your selector)
   - **Value**: Paste the entire DKIM public key from Ionos
   - **TTL**: 3600 (default)
4. Click **Save**

### Verification:
```bash
# Check if DKIM record is set (wait 24-48 hours for propagation)
nslookup -type=TXT default._domainkey.dmd-ascenseur.com
```

## Step 3: Add DMARC Record to DNS

### In Ionos DNS Manager:
1. Click **Add Record**
2. Fill in:
   - **Type**: TXT
   - **Name**: `_dmarc`
   - **Value**: (see below)
   - **TTL**: 3600

### DMARC Policy Options:

**Option A: Monitoring Only (Recommended for testing)**
```
v=DMARC1; p=none; rua=mailto:dmarc@dmd-ascenseur.com; ruf=mailto:dmarc@dmd-ascenseur.com; fo=1
```

**Option B: Quarantine (Recommended for production)**
```
v=DMARC1; p=quarantine; rua=mailto:dmarc@dmd-ascenseur.com; ruf=mailto:dmarc@dmd-ascenseur.com; fo=1
```

**Option C: Reject (Strict - use after testing)**
```
v=DMARC1; p=reject; rua=mailto:dmarc@dmd-ascenseur.com; ruf=mailto:dmarc@dmd-ascenseur.com; fo=1
```

### DMARC Record Explanation:
- `v=DMARC1` - DMARC version
- `p=none|quarantine|reject` - Policy (what to do with failed emails)
- `rua=mailto:...` - Reports for aggregate data
- `ruf=mailto:...` - Reports for forensic data
- `fo=1` - Report on all failures

## Step 4: Verify SPF Record

Check if SPF is already configured:

```bash
nslookup -type=TXT dmd-ascenseur.com
```

Should show something like:
```
v=spf1 include:ionos.com ~all
```

If missing, add:
- **Type**: TXT
- **Name**: @ (or leave blank)
- **Value**: `v=spf1 include:ionos.com ~all`

## Step 5: Test Email Authentication

### Online Tools:
1. **MXToolbox**: https://mxtoolbox.com/dmarc.aspx
   - Enter: `dmd-ascenseur.com`
   - Check DMARC, DKIM, SPF status

2. **Google Admin Toolbox**: https://toolbox.googleapps.com/apps/checkmx/
   - Enter: `dmd-ascenseur.com`
   - Detailed email configuration check

3. **DKIM Validator**: https://www.mail-tester.com/
   - Send test email
   - Get detailed authentication report

### Command Line:
```bash
# Check SPF
nslookup -type=TXT dmd-ascenseur.com

# Check DKIM
nslookup -type=TXT default._domainkey.dmd-ascenseur.com

# Check DMARC
nslookup -type=TXT _dmarc.dmd-ascenseur.com
```

## Step 6: Monitor DMARC Reports

### Set Up Report Email:
1. Create email address: `dmarc@dmd-ascenseur.com` in Ionos
2. Update DMARC record to use this email
3. Check reports daily for:
   - Authentication failures
   - Spoofing attempts
   - Configuration issues

## Timeline

| Step | Time |
|------|------|
| Add DNS records | Immediate |
| DNS propagation | 24-48 hours |
| DKIM signing | After propagation |
| DMARC enforcement | After propagation |
| Reports generation | 24 hours after first email |

## Troubleshooting

### DKIM Not Working
- ✅ Verify selector name matches Ionos
- ✅ Check entire public key is copied (no line breaks)
- ✅ Wait 24-48 hours for DNS propagation
- ✅ Use `nslookup` to verify record exists

### DMARC Reports Not Arriving
- ✅ Verify `dmarc@dmd-ascenseur.com` exists and is active
- ✅ Check spam folder
- ✅ Wait 24 hours after first email
- ✅ Ensure DMARC record is correctly formatted

### Emails Still Going to Spam
- ✅ All three (SPF, DKIM, DMARC) must be configured
- ✅ Check email content (no spam triggers)
- ✅ Verify sender reputation
- ✅ Test with mail-tester.com

## Production Checklist

- [ ] SPF record configured
- [ ] DKIM record added and verified
- [ ] DMARC record with `p=quarantine` or `p=reject`
- [ ] DMARC report email set up
- [ ] DNS propagation confirmed (24-48 hours)
- [ ] Test email sent and verified
- [ ] Email authentication score 10/10 on mail-tester.com
- [ ] Monitor DMARC reports for issues

## Quick Reference

**Ionos SMTP Settings:**
```
Host: smtp.ionos.com
Port: 465 (SSL/TLS)
Username: your-email@dmd-ascenseur.com
Password: Your Ionos password
```

**DNS Records Needed:**
1. SPF: `v=spf1 include:ionos.com ~all`
2. DKIM: Public key from Ionos
3. DMARC: `v=DMARC1; p=quarantine; rua=mailto:dmarc@dmd-ascenseur.com`

## Support

- **Ionos Help**: https://www.ionos.com/help
- **DMARC Guide**: https://dmarc.org/
- **Email Authentication**: https://www.dmarcian.com/
